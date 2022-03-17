const express = require('express')
const router = express.Router()
const fs = require('fs')
let category = []

fs.readFile('./data/category-1000.json', (err, data) => {
  if (err) throw err
  category = JSON.parse(data)
});

/* GET product listing. */
router.get('/', function(req, res, next) {
  res.json(category)
  res.send()
});

module.exports = router;
