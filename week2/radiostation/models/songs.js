//_id: ObjectId('5b9b809a638c86001f730894')
//annoying: true
//artist: "Mariah Carey"
//creationDate: "1994-11-01T11:23:42.567+00:00"
//title: "All I Want for Christmas Is You"


const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    artist : String,
    title: String,
    annoying: Boolean,
    creationDate: Date,
   });

   const Song = mongoose.model('songs',songSchema)

   module.exports = Song;
