const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	userName: String,
	mail : String,
	password: String,
	
});

const User = mongoose.model('users',userSchema);

module.exports = User;