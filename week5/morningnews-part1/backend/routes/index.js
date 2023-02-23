var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const API_KEY = process.env.REACT_APP_API_KEY


router.get('/articles', (req, res) => {
    const url = `https://newsapi.org/v2/everything?sources=the-verge&apiKey=${API_KEY}`
    fetch(url)
        .then(response =>response.json())
        .then(data => { 
            console.log(data)
            res.json({articles : data.articles})
        })
});




module.exports = router;
