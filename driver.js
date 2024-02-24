const Book = require('./models/Book');
const mongoose = require('mongoose');
const fs = require('fs').promises;

const connectMongoDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI).catch(async (err) => {
        console.log('Error while mongoose connection: ', err);
        await disconnectMongoDB(1);
    });
    return mongoose.connection;
};

const disconnectMongoDB = async (status) => {
    await mongoose.connection.close().catch((err) => console.log(err));
    process.exit(status);
};

// initial entry point for the driver
const init = async () => {
    await connectMongoDB();
    const SEED_FILE = 'Library/Library.md';
    const buf = await fs.readFile(SEED_FILE, 'utf-8').catch(async (err) => {
        console.log('Error while reading the file: ', err);
        await disconnectMongoDB(1);
    });

    let arr = buf.toString().split('\n');
    let fileNames = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].search('.md') !== -1) {
            // search for markdown files
            let filename = arr[i].split(/([()])/);
            fileNames.push(filename[2]);
        }
    }
    await extractDataFromMarkdown(fileNames);
};

init();

// traversing fileNames and extract data
const extractDataFromMarkdown = async (fileNames) => {
    const DOWNLOAD_URL = process.env.DOWNLOAD_URL;
    const VIEW_URL = process.env.VIEW_URL;
    let objectDatabase = [];

    for (let i = 0; i < fileNames.length; i++) {
        let readFileName = 'Library/' + fileNames[i]; // reading files path

        const buf = await fs.readFile(readFileName, 'utf-8');
        let lines = buf.toString().split('\n');
        let language = fileNames[i].split('.md')[0];

        // MARKDOWN PARSING
        let object = null;
        for (let j = 0; j < lines.length; j++) {
            if (lines[j].search('## :rocket:') !== -1) {
                if (object != null) {
                    objectDatabase.push(object);
                }
                object = {
                    name: lines[j].split('## :rocket: ')[1],
                    view: '',
                    size: '',
                    language,
                };
            } else if (lines[j].search('Download') !== -1) {
                let url = lines[j].split(/([()])/)[2];
                object.download = url.replace('./', DOWNLOAD_URL);
                object.view = url.replace('./', VIEW_URL);
            } else if (lines[j].search('size:') !== -1) {
                object.size = lines[j].split('* size: ')[1];
            }
        }
        objectDatabase.push(object); // pushing last created object
    }
    console.log(
        'No. of Books found by markdown parser: ' + objectDatabase.length
    );
    await addDataToMongo(objectDatabase);
    await disconnectMongoDB(0);
};

// this function will add the extracted data in mongo
const addDataToMongo = async (objectDatabase) => {
    const result = await Book.insertMany(objectDatabase, {
        ordered: false,
    }).catch((err) => {
        console.log('Error while inserting the documents: ', err.writeErrors);
    });
    console.log('Books Added:', result !== undefined ? result : '0');
};
