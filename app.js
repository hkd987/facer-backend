const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('WE ARE LIVE')
})

app.listen(PORT, () => {
  console.log(`Express is up on ${PORT}`)
})
