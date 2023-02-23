
const Trip = require('../models/trips');

var express = require('express');
var router = express.Router();

//POST /trips : ajoute un nouveau trajet dans le tableau trips/
router.post('/trips', (req, res) => {
  const newTrip = new Trip({
    departure: req.body.departure,
    arrival: req.body.arrival,
  });
   newTrip.save().then(() => {

    Trip.find().then(data => {
  res.json({allTrips: data});
});
});
});
//GET /trips : renvoie tous les trajets du tableau trips/
router.get('/trips', (req, res) => {
  Trip.find().then(data => {
  res.json({ allTrips: data });
});
});


router.get('/lastTrip', (req, res) => {
  Trip.findOne({}).then(data => {
    console.log(data);
  })
  res.json({ lastTrip: trips[trips.length - 1] });
});

router.delete('/trips', (req, res) => {
  trips.deleteMany;
  res.json({ allTrips: trips });
});

module.exports = router;
