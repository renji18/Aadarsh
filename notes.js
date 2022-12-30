const express = require("express");
const router = express.Router();

const getJsonResponse = async(req, res) => {
  // res.json({ msg: `Getting response from this route: ${req.url}`})
  res.json([])
}

router.route('/').get(getJsonResponse)

module.exports = router;