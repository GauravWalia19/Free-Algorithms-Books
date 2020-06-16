const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../../models/Book');

// for hitting github apis
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
    auth: process.env.ACCESS_TOKEN,
    userAgent: 'FreeAlgorithmBooks v1.0.0',
    request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
    }
})

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection error:'));

/**
 * @endpoint: /api/v1/get
 * 
 * @method GET
 * @access public
 * @author Gaurav Walia
 * 
 * Query Parameters
 * @param language
 * 
 * @return response
 **/
router.get('/get', (req,res)=>{
    const { language } = req.query;
    if(!language){
        return res.status(400).json({
            message: 'Bad Request because of no language parameter',
            status: 400
        })
    }
    Book.find({language: language}, (err, result)=>{
        if(err){
            console.log(err);
            return res.status(404).json({
                message: 'Requested information not found',
                status: 404
            })
        }else{
            return res.json(result);
        }
    })
})

/**
 * @endpoint: /api/v1/search
 * 
 * @method GET
 * @access public
 * @author Gaurav Walia
 * 
 * Query Parameters
 * @param language
 * @param name
 * 
 * @return response
 **/
router.get('/search', (req,res)=>{
    const { language, name } = req.query;
    if(!language){
        return res.status(400).json({
            message: 'Bad Request because of no language parameter',
            status: 400
        })
    }
    else if(!name){
        res.redirect(`get?language=${language}`);
    }else{
        let expression = new RegExp(name, 'i'); 
        Book.find({language: language, name: expression},(err, result)=>{
            if(err){
                console.log(err);
                return res.status(404).json({
                    message: 'Requested information not found',
                    status: 404
                })
            }else{
                return res.json(result);
            }
        })  
    }
})

/**
 * @endpoint /api/v1/bugs/report
 * 
 * @method POST 
 **/
router.post('/bugs/report', (req,res)=>{
    const {
        title, 
        description, 
        expectedBehaviour, 
        device, 
        os, 
        browser,
        version,
        username } = req.body;
    
    if(!title || !description || !expectedBehaviour || 
        !device || !os || !browser || !version || !username){
        return res.status(400).json({
            message: 'Bad Request because of missing parameter',
            status: 400
        });
    }else{
        // check valid github username
        octokit.users.getByUsername({
            username
        })
        .then(response => {
            if(response.data){
                let issueBody = "".concat(
                    '**Describe the bug**\n',description,
                    '\n\n**Expected behavior**\n',expectedBehaviour,
                    '\n\n**Desktop/Smartphone**\n-Device: ',device,
                    '\n-OS: ',os,
                    '\n-Browser: ',browser,
                    '\n-Version: ',version,
                    '\n\n**Github Username**\n', username
                )
                createIssue(title, issueBody, ['bug'], res);
            }
        })
        .catch(err => res.status(404).json(err));
    }
})

const createIssue = (title, issueBody, labels, res)=>{
    octokit.issues.create({
        owner: process.env.OWNER,
        repo: process.env.REPO,
        title,
        body: issueBody,
        labels
    })
    .then(_res => {
        return res.json({message: 'Issue created Successfully',status: 200})
    })
    .catch(err => {
        console.log(err);
        return res.status(400).json({message: 'Bad Request'})
    })
}

/**
 * @endpoint /api/v1/book/add
 * 
 * @method POST
 * @access public
 * @param title
 * @param bookName
 * @param language
 * @param downloadLink
 * @param username
 * 
 * @return response
 **/
router.post('/book/add', (req,res)=>{
    const { title, bookName, language, downloadLink, username} = req.body;

    if(!title || !bookName || !language || !downloadLink || !username){
        return res.status(400).json({
            message: 'Bad Request because of missing parameters',
            status: 400
        });
    }else{
        // check valid github username
        octokit.users.getByUsername({
            username
        })
        .then(response => {
            if(response.data){
                let issueBody = "".concat(
                    '**Book Name**\n', bookName,
                    '\n\n**Programming Language**\n', language,
                    '\n\n**Book Download Link**\n', downloadLink,
                    '\n\n**Github Username**\n', username
                )
                createIssue(title, issueBody, ['question'], res)
            }
        })
        .catch(err => res.status(404).json(err));
    }
})

module.exports = router;