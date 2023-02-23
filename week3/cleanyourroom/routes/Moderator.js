var express = require('express');
var router = express.Router();

const { checkModeratorPassword }  = require('../modules/checkPasswords');

router.post('/secretaction', (req, res) => {
    if (checkModeratorPassword(req.body.passwordModerator)) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for moderator' });
    }
  });

  router.post('/login', (req, res) => {
    if (checkModeratorPassword(req.body.passwordModerator)) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for moderator' });
    }
  });

module.exports = router