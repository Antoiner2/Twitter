const mongoose = require('mongoose');
const { token } = require('morgan');
const uid2 = require('uid2')



const userSchema = mongoose.Schema({
  username: String,
  password: String,
  canBookmark : Boolean,
  token: String
  

});

const User = mongoose.model('users', userSchema);



module.exports = User;
