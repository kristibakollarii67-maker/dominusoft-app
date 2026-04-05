const express = require('express')
const router = express.Router()
const contactModel = require('./contactModel')

router.post('/addContact', async (req, res) => {
    try{
        const newContact = new contactModel(req.body)
        await newContact.save()
        res.status(200).send("newContact")
        console.log("added")
    }catch(err){
        res.status(500).send("Not add:"+err)
        console.log("Not add: " + err)
    }

})

module.exports = router