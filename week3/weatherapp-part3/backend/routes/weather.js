var express = require("express");
var router = express.Router();
const City = require("../models/cities");
const fetch = require("node-fetch");
const OWM_API_KEY = "1dda031180043f24f2f8823a72b5d0d8";

router.post("/", (req, res) => {
  City.find().then((data) => {
    if (
      !data.some(
        (e) => e.cityName.toLowerCase() === req.body.cityName.toLowerCase()
      )
    ) {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${OWM_API_KEY}&units=metric')
        .then((response) => response.json())
        .then((apiData) => {
          const newCity = new City({
            cityName: apiData.name,
            main: apiData.weather[0].main,
            description: apiData.weather[0].description,
            tempMin: apiData.main.temp_min,
            tempMax: apiData.main.temp_max,
          });
          newCity.save();
          res.json({ result: true, weather: newCity });
        });
    } else {
      res.json({ result: false, error: "City already saved" });
    }
  });
});
router.get("/", (req, res) => {
  City.find().then((data) => {
    res.json({ weather: data });
  });
});
router.get("/:cityName", (req, res) => {
  City.find().then((data) => {
    const searchedWeather = data.find(
      (e) => e.cityName.toLowerCase() === req.params.cityName.toLowerCase()
    );
    if (searchedWeather) {
      res.json({ result: true, weather: searchedWeather });
    } else {
      res.json({ result: false, error: "City not found" });
    }
  });
});
router.delete("/:cityName", (req, res) => {
    City.deleteOne({ cityName: req.params.cityName }).then((data) => {
      if (data.deletedCount > 0) {
        City.find().then((data) => {
          res.json({ result: true, weather: data });
        });
      } else {
        res.json({ result: false, error: "City not found" });
      }
    });
  });
  module.exports = router;