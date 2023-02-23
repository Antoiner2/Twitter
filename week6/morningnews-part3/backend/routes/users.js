var express = require('express');
var router = express.Router();
const User = require("../models/users");
const {checkBody} = require ("../modules/checkBody")





  // Partie pour un nouvel user

  router.post('/signup', (req, res) => {
    if (!checkBody(req.body, ['username', 'password'])) {
      res.json({ result: false, error: 'Missing or empty fields' });
      return;
    }
   
    // Si l'utilisateur n'a pas encore été enregistré 
    User.findOne({ username: req.body.username }).then(data => {
      if (data === null) {

        const newUser = new User({
          username: req.body.username,
          password: req.body.password,
        });
   
        newUser.save().then(newDoc => {
          res.json({ result: true });
        });
      } else {
        // Si l'utilisateur existe déja
        res.json({ result: false, error: 'User already exists' });
      }
    });
   });

 // Partie pour un user qui se log
 router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }
 
  User.findOne({ username: req.body.username, password: req.body.password }).then(data => {
    if (data) {
      res.json({ result: true });
    } else {
      res.json({ result: false, error: 'User not found' });
    }
  });
 });
 

module.exports = router