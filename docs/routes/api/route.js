const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../../models/Book');

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
        return res.status(400).json({
            message: 'Bad Request because of no name parameter',
            status: 400
        })
    }else{
        let expression = new RegExp(name, 'i'); 
        Book.find({name: expression},(err, result)=>{
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


module.exports = router;