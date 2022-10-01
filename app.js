const express = require('express')
const path = require('path');

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: '.' })
})


app.post('/test', (req, res, err) => {
  console.log(req.body)
  res.json('Successful post')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})