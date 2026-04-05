const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')

app.use(cors(
{
credentials: true,
origin: "http://localhost:3000",
exposedHeaders: ["set-cookie"],
}))
app.use(session({
secret: "This will be secret",
resave: false,
saveUninitialized: true,
cookie: {maxAge: 1000 * 60 * 60 * 24}
}))
app.use(express.json({ limit: "1000mb", extended: true }));


mongoose.connect('mongodb://localhost:27017/Project')
.then(()=> console.log('DB connected'))
.catch((err)=> console.log('Something is wrong ' + err))

const contactRoute = require('./contactRoute')

const testFun =(req, res)=>{
    res.send('hello');
}

//app.use('/', testFun);
app.use( contactRoute);


// Server
app.listen(5000, ()=>{
    console.log('SERVER CREATED');
})
