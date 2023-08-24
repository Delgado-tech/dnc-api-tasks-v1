var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(process.env.TEST)
  res.send('respond with a resource');
});

module.exports = router;
