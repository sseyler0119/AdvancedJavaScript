/* NOTE: To run this, you need to run npm start in the terminal AND you need to run the API server also. Otherwise, you will get a connection refused error */


var express = require('express');
var router = express.Router();
const apiHelper = require('../helpers/apiHelper');

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', {title: "Bethany's Pie Shop"});
});

*/

router.get('/', function(req, res, next) {
  apiHelper.callApi('http://localhost:5000/api/')
  .then(response => {
    console.log(response);
    res.render('index', 
    { title: "Bethany's Pie Shop", data: response.data});
  })
  .catch(error => {
    res.send(error)
  });
});

module.exports = router;
