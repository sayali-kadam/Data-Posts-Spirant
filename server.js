const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: 'true'}))

const dbfile = require('./conn')

const postroute = require('./routes/post')
app.use('/api/post', postroute)

app.get('/', (req, res) => {
    res.end('Helloworld with Node JS')
})

app.listen(5000, function(){
    console.log('Node JS and Express server started successfully')
})