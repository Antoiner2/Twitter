var express = require("express");
var router = express.Router();
require("../models/connection");
const { checkBody } = require("../modules/checkBody");
const Place = require("../models/places");

// POST /places : ajout d’un marqueur en base de données (via req.body)
router.post("/places", (req, res) => {
  const { nickname, name, latitude, longitude } = req.body;
  const newPlace = new Place({ nickname, name, latitude, longitude });

  newPlace.save().then(() => {
    res.json({ result: true });
  });
});

//  GET /places/
router.get("/places/:nickname", (req, res) => {
  Place.find({ nickname: req.params.nickname }).then((data) => {
    res.json({ result: true, places: data });
  });
});

// DELETE/places
router.delete("/places", (req, res) => {
  Place.remove({ nickname: req.body.nickname, name: req.body.name }).then(
    (deletedDoc) => {
      if (deletedDoc.deletedCount > 0) {
        res.json({ result: true });
      } else {
        res.json({ result: false, error: "Place not found" });
      }
    }
  );
});

module.exports = router;
