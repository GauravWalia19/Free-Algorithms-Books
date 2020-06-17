const Book = require('./models/Book');
const mongoose = require('mongoose');
let fs = require('fs');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Connection error:'));

const SEED_FILE = '../Library/Library.md';
fs.readFile(SEED_FILE, (err,buf)=>{
    if(err){
        console.log(err);
    }
    let arr = buf.toString().split('\n');
    let fileNames = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].search('.md')!=-1){           // search for markdown files
            let filename = arr[i].split(/([()])/);
            fileNames.push(filename[2])
        }
    }
    extractDataFromMarkdown(fileNames);
})

// traversing fileNames and extract data
const extractDataFromMarkdown = (fileNames)=>{
    const DOWNLOAD_URL = "https://github.com/GauravWalia19/Free-Algorithms-Books/raw/master/Library/";
    const VIEW_URL     = "https://github.com/GauravWalia19/Free-Algorithms-Books/blob/master/Library/";

    for(let i=0;i<fileNames.length;i++){
        let objectDatabase = [];
        let readFileName = '../Library/'+fileNames[i];       // reading files path

        fs.readFile(readFileName, (err,buf)=>{
            if(err)
            {
                console.log(err);
            }
            let object = null;
            let arr = buf.toString().split('\n');
            let language = fileNames[i].split('.md')[0];

            // MARKDOWN PARSING
            for(let j=0;j<arr.length;j++) {
                if(arr[j].search("## :rocket:")!=-1){
                    if(object!=null)
                    {
                        objectDatabase.push(object);
                    }
                    object={
                        name: arr[j].split('## :rocket: ')[1],
                        view: "",
                        size: "",
                        language
                    }
                }else if(arr[j].search("Download") != -1){
                    let url = arr[j].split(/([()])/)[2]; 
                    object.download = url.replace('./', DOWNLOAD_URL);
                    object.view = url.replace('./', VIEW_URL); 
                }else if(arr[j].search("size:") != -1){
                    object.size=arr[j].split("* size: ")[1]
                }
            }
            objectDatabase.push(object);        // pushing last created object
            addDataToMongo(objectDatabase);
        })
    }
}

const addDataToMongo = (objectDatabase)=>{
    for(let i=0;i<objectDatabase.length;i++){
        let book = new Book(
            objectDatabase[i]
        );
        book.save((err, book)=>{
            if(err)
            {
                console.log(err.message);
            }else{
                console.log("Book Added: " + objectDatabase[i].name);
            }
        });
    }
}