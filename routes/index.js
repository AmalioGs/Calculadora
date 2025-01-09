var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');
const multer = require('../middlewares/multer.js');

/* GET home page. */
router.get('/', (req, res) => {
  let sql = 'SELECT name, country, tel, image FROM calcu';

  connection.query(sql, (error, result) => {
    if (error) {
     throw err; 
    }
    else {
      console.log(result);
      res.render('index', {result});
    }
  })
});


module.exports = router;
