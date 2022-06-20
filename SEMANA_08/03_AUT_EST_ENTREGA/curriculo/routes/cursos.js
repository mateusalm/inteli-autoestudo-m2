const express = require('express')
const router = express.Router()
const db = require('../data/db')
const DBPATH = '../data/curriculo.db'

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
})

router.post('/cursosinsert', (req, res) => {
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*') // Isso é importante para evitar o erro de CORS

  sql = `INSERT INTO cursos (nome, linguagem) VALUES ('${req.body.nome}', '${req.body.linguagem}')`
  var cursosCreate = new sqlite3.Database(DBPATH)
  cursosCreate.run(sql, [], err => {
    if (err) {
      throw err
    }
  })
  res.end()
})

router.patch('/cursosupdate', (req, res) => {
  let nome = req.params['nome']
  let linguagem = req.params['linguagem']
  let id = req.params['id']

  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*')

  sql = `UPDATE cursos SET nome = ?, linguagem = ? WHERE id = ?`
  var cursosCreate = new sqlite3.Database(DBPATH)
  cursosCreate.run(sql, [nome, linguagem, id], err => {
    if (err) {
      throw err
    }
  })
  db.close()
  res.end()
})

router.delete('/cursosdelete', (req, res) => {
  let id = req.params['id']

  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*')

  sql = 'DELETE FROM cursos WHERE id = ?'
  db.run(sql, [id], err => {
    if (err) {
      throw err
    } else console.log(sql)
    res.end()
  })
})

module.exports = router
