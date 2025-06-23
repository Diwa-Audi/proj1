require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;

app.get(('/') , (req , res)=>{
    res.send('<h1>Welcome to Home page')
})

app.get('/check', (req, res)=>{
    res.send('i hope this is working properly')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

