var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');
const multer = require('../middlewares/multer')


router.get('/', (req, res) => {
  res.rend('estoy')
});


router.post('/createUser', multer("calcu"), (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const country = req.body.country;
  const tel = req.body.tel;
  console.log(req.file);
  
  
  let sql = `INSERT INTO calcu (name, country, tel) VALUES ('${name}', '${country}', '${tel}')`

  if (req.file != undefined) {
    sql = `INSERT INTO calcu (name, country, tel, image) VALUES ('${name}', '${country}', '${tel}', '${req.file.filename}')`
  }

  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    else {
      console.log(result);
      res.redirect('/');
    }
  })
  console.log(req.file);
  
}) 

module.exports = router;
