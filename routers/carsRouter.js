const express = require("express");

const carDb = require("../data/helpers");

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const cars = await carDb.find();
    res.status(200).json(cars);
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: "Something went wrong when getting the car info" });
  }
});

module.exports = router;
