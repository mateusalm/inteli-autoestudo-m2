const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

const backendRoute = require('../curriculo/routes/backend')

app.use('/data', backendRoute)

app.use(express.json())

const server = app.listen(port, () => {
  console.log('Servidor executando na porta ' + server.address().port)
})
