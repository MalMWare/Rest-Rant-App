const router = require('express').Router()
const places = require("../models/places.js")


//create
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


router.get('/', (req, res) => {
    res.render('places/index', { places })
})

//new
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
      res.render('places/show', { place: places[id], id })
    }
})

router.delete("/:id", (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        //res.send('STUB DELETE places/:id')
        res.redirect('/places')
    }
})
  
// router.get('/:id', (req, res) => {
//     (places[req.params.id])
//       ? res.render('places/show', { place: places[req.params.id], id: req.params.id })
//       : res.status(404).render('Error404')
// })

module.exports = router