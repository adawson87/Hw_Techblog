// Import libraries and models
const router= require('express').Router()
const req = require('express/lib/request')
const{Post}= require('../../models')
const withAuth= require('../../utils/auth')



// Write Get, Post, Put and Delete Routes 
router.post('/', (req, res,) => {
Post.create({
    ...req.body,
    userId: req.body.user_id
    }).then(res => {
        res.json(res)
    }) .catch(error => {
        res.status(500).json(error)
    });
})
// Exports

router.put('/:id', withAuth, (req, res,) => {
    Post.update(req.body,
        { 
            where: {
                id: req.params.id
            }
        }) .then(res => {
            res.json()
        }) .catch(error => {
            res.status(500).json(error)
        });
    })

    router.delete('/:id', withAuth, (req, res,) => {
        Post.destroy({
            
                where: {
                    id: req.params.id
                }
            }) .then(res => {
                res.json()
            }) .catch(error => {
                res.status(500).json(error)
            });
        })

        module.exports=router