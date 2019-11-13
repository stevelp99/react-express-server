var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(_, res) {
  res.json(["Matt", "Emily", "Steven"]);
});

module.exports = router;
