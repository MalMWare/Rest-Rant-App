const router = require('express').Router()
const places = require("../models/places.js")

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    } 
    else {
        res,render('places/show', {place: places[id]})
    }
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = "https://placekitten.com/400/500"
    }
    if (!req.body.city) {
        req.body.city = 'Anywhere'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

module.exports = router