// Import libraries and models

const router= require('express').Router()
const req = require('express/lib/request')
const{Comments}= require('../../models')
const withAuth= require('../../utils/auth')



// Write Get, Post, Put and Delete Routes 
router.post('/', withAuth, (req, res,) => {
Comments.create({
    ...req.body,
    userId: req.session.userId
    }) .then(res => {
        res.json()
    }) .catch(error => {
        res.status(500).json(error)
    });
})

// Write Get(Optional), Post Route

// Exports
module.exports=router