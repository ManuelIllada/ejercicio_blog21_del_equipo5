const express = require("express");
const router = express.Router();
const pageController = require("./controllers/pageController");

router.get("/", pageController.showHome);

router.get("/admin", pageController.showAdmin);

router.get("/articulos/:id", (req, res) => {
  res.render("articulos");
});

module.exports = router;
