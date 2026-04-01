const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')



const testFun =(req, res)=>{
    res.send('hello');
}

app.use('/', testFun);


// Server
app.listen(5000, ()=>{
    console.log('SERVER CREATED');
})
