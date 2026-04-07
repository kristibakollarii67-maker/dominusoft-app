const express = require('express')
const app = express()
const contactModel = require('./contactModel')

app.post('/contact', async (req, res)=>{
    try {
        const newContact = new contactModel(req.body)
        const savedContact = await newContact.save()
        res.status(200).json(savedContact)
        console.log(added)
    } catch (error) {
        res.status(500).json({ message: 'Error saving contact', error })
    }
})

module.exports = app;