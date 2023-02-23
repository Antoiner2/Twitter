const mongoose = require('mongoose');


const populationSchema = mongoose.Schema({
    year : Date,
    populationnbr : Number
    

   });
   
   const countrySchema = mongoose.Schema({
    name: String,
    flagImg : String,
    city: String,
    population: [populationSchema]
    
   });
   
   

const Country = mongoose.model('countries', countrySchema);

module.exports = Country;
