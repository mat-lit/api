const express = require('express')
const path = require('path');

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: '.' })
  res.sendFile('public/index.js', { root: '.' })
})

app.get('/api', (req, res) => {
  res.send('nice one!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})