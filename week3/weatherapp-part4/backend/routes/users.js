var express = require("express");
var router = express.Router();
const User = require("../models/users");
const fetch = require("node-fetch");


// Partie pour un nouvel user
router.post('/signup', (req, res) => {
    // Si user n'est pas encore inscrit
    User.findOne({ email: req.body.email }).then(data => {
      if (data === null) {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
   
        newUser.save().then(newDoc => {
          res.json({ result: true });
        });
      } else {
        // User déja dans la data base
        res.json({ result: false, error: 'User already exists' });
      }
    });
   });



// Partie pour un user qui se log
 router.post('/signin', (req, res) => {
    User.findOne({ email: req.body.email, password: req.body.password }).then(data => {
      if (data) {
        res.json({ result: true });
      } else {
        res.json({ result: false, error: 'User not found' });
      }
    });
   });

   module.exports = router;