//_id: ObjectId('626276ddc757ec59280a0722')
//discontinued: false
//mainAnimator: "Difool"
//name: "Radio Libre"
//nbAnimators: 7

const mongoose = require('mongoose');

const emissionSchema = mongoose.Schema({
    name : String,
    mainAnimator: String,
    discontinued: Boolean,
    nbAnimators: Number,
   });

   const Emission = mongoose.model('emissions',emissionSchema)

   module.exports = Emission;

 