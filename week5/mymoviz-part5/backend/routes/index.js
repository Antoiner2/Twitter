var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.REACT_APP_API_KEY

router.get('/movies', (req, res) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc`
    fetch(url)
        .then(response =>response.json())
        .then(data => { 
            console.log(data)
            res.json({movies : data.results})
        })
});


module.exports = router;
