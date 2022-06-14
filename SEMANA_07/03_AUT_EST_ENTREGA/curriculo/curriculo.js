const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

const backendRoute = require('./routes/cursos')

app.use('/data', backendRoute)

app.use(express.static(path.join(__dirname, 'frontend')))

app.use(express.json())

const server = app.listen(port, () => {
  console.log('Servidor executando na porta ' + server.address().port)
})
