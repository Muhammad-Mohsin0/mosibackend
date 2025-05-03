require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('NewsAccount')
})

app.get('/login',(req,res) => {
    res.send('<h1>Please Login throug Gmail<h1/>')
})

app.get('/youtube', (req,res) =>{
    res.send('<h2>Mouhsina Vlog <h2/>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
