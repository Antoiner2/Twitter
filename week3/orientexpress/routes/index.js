var express = require('express');
var router = express.Router();

let trips = [{ departure: 'Paris', arrival: 'Lyon' }, { departure: 'Lyon', arrival: 'Marseille' }, {departure: "Grenoble",
arrival: "Strasbourg"}]



// POST /trips - Sample result: 
// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]

router.post('/trips', (req, res) => {
    trips.push({ departure: req.body.departure, arrival: req.body.arrival });
    res.json({ allTrips: trips });
   }); 

// GET /trips - Sample result:
// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]

router.get('/trips', (req, res) => {

    res.json({ allTrips: trips });
   });


// GET /lastTrip - Sample result:
// "lastTrip": {
//   "departure": "Grenoble",
//   "arrival": "Strasbourg"
// }

router.get('/lastTrip', (req, res) => {
    trips = trips[trips.length-1]
    res.json({ allTrips: trips});
   });



// DELETE /trips - Sample result:
// "allTrips": []

router.delete('/trips', (req, res) => {
    trips.splice(req.params.position, 1);

    res.json({ allTrips: trips });
   });


module.exports = router;