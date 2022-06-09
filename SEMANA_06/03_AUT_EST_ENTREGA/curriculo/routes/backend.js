const express = require('express')
const router = express.Router()
const db = require('../data/curriculo2.db')

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/all', (req, res) => {
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  var sql = 'SELECT * FROM Project'
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err
    }
    res.json(rows)
  })
})

module.exports = router
