require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get(('/') , (req , res)=>{
    res.send('<h1>Welcome to Home page')
})

app.get('/check', (req, res)=>{
    res.send('i hope this is working properly')
})

app.listen(process.env.port, ()=>{
    console.log(`example app is running at ${port}`)
})

