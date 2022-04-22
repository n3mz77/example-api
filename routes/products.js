const express = require('express')
const router = express.Router()
const fs = require('fs')
let products = []

fs.readFile('./data/products-1000.json', (err, data) => {
  if (err) throw err
  products = JSON.parse(data)
});

/* GET product listing. */
router.get('/', function(req, res, next) {
  const reqBody = req.query || {}
  const limit = parseInt(reqBody.limit) || 0
  const offset = parseInt(reqBody.offset) || 0
  const category = reqBody.category
  let output = products.map(item => item)
  if (category) {
    output = output.filter(item => item.category === category)
  }
  if (limit > 1)  {
    output = output.splice(offset, limit)
  }
  res.header('Access-Control-Allow-Origin', '*')
  res.json(output)
});

module.exports = router;
