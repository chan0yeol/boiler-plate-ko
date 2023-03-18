const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://oco723:qaz193725846@boileplate.pg7gayy.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongDB Connected..'))
.catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('Hello Wor~~~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})