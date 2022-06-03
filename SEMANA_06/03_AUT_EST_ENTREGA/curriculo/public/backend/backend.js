const express = require('express')
const app = express()

const hostname = '127.0.0.1'
const port = 3061
const sqlite3 = require('sqlite3').verbose()
const DBPATH = 'curriculo.db'

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('../frontend/'))

app.use(express.json())

/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
app.get('/cursos', (req, res) => {
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*') // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH) // Abre o banco
  var sql = 'SELECT * FROM cursos ORDER BY id COLLATE NOCASE'
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err
    }
    res.json(rows)
  })
  db.close() // Fecha o banco
})

// Insere um registro (é o C do CRUD - Create)
app.post('/cursosinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*') // Isso é importante para evitar o erro de CORS

  sql = 'INSERT INTO cursos (nome) VALUES ("' + req.body.nome + '")'
  var db = new sqlite3.Database(DBPATH) // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err
    }
  })
  db.close() // Fecha o banco
  res.end()
})

// Atualiza um registro (é o U do CRUD - Update)
app.post('/cursosupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*') // Isso é importante para evitar o erro de CORS

  sql =
    "UPDATE tbUser SET nome = '" +
    req.body.title +
    "' WHERE userId = " +
    req.body.userId
  var db = new sqlite3.Database(DBPATH) // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err
    }
    res.end()
  })
  db.close() // Fecha o banco
})

// Exclui um registro (é o D do CRUD - Delete)
app.post('/cursosdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*') // Isso é importante para evitar o erro de CORS

  sql = 'DELETE FROM tbUser WHERE userId = ' + req.body.userId
  var db = new sqlite3.Database(DBPATH) // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err
    }
    res.end()
  })
  db.close() // Fecha o banco
})

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
