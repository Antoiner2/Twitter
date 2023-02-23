const mongoose = require('mongoose');
const seeUsers = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    inscriptionDate: Date
});
const User = mongoose.model('users', seeUsers);
module.exports = User