const express = require('express')
const app = express()
const jokes = require('./jokes')

app.get("/joke", (req, res) => {
  setTimeout(() => {
    res.send({src: jokes.random()})
  }, 2000)
})
app.use(express.static("public"))

app.listen(8080, () => console.log("listening on port 8080"))