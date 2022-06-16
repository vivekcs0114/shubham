var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/', function (req, res, next) {
  res.json({msg: 'Hello world!'})
})

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})