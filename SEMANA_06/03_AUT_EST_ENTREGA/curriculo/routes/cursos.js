const express = require('express')
const router = express.Router()
const db = require('../data/db')

router.get('/cursos', (req, res) => {
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  var sql = 'SELECT nome, linguagem FROM cursos'
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err
    }
    res.json(rows)
  })
  db.close()
})

module.exports = router
