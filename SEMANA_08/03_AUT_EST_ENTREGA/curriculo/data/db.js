const path = require('path')
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database(path.join(__dirname, '/curriculo.db'), err => {
  console.log(__dirname)
  if (err) {
    return console.error(err.message)
  }
  console.log("Successful connection to the database 'curriculo.db'")
})

module.exports = db
