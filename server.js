const express = require( 'express' )

const server = express()

server.use(express())

server.get('/', (req, res) => {
  res.status(200).send('<h1>Hello World</h1>')
})

module.exports = server