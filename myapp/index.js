const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
const userRoute = require('./routes/user')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('home.ejs')
})


app.get('/signup', (req, res) => {
  res.send('signin.ejs')
})

app.get('/signup', (req, res) => {
  res.send('signup.ejs')
})

app.post('/signup', (req,res) => {
  let username = req.body.username
  console.log(username)
})

app.listen(PORT, () => {
  if (STATUS == 'DEV') {
      console.log(`listening to port ${PORT} live and well in DEV enviroment`)
  } else if (STATUS == 'PROD') {
      console.log(`listening to port ${PORT} live and well in PROD enviroment`)
  } else {
      console.log('cannot read status error')
      return
  }
})