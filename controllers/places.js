const router = require('express').Router()
const places = require("../models/places.js")

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

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

//new
router.get('/new', (req, res) => {
    res.render('places/new')
})


//show
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id], id: req.params.id})
    }
})


//delete
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

//put
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        if (!req.body.pic) {
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
        places[id] =req.body
        res.redirect(`/places/${id}`)
    }
})

//edit
// router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.redirect('places/edit', { place: places[id] })
//     }
// })
  

// EDIT
router.get('/:id/edit', (req, res) => {
    res.render('places/edit', { place: places[req.params.id], id: req.params.id })
})
// router.get('/:id', (req, res) => {
//     (places[req.params.id])
//       ? res.render('places/show', { place: places[req.params.id], id: req.params.id })
//       : res.status(404).render('Error404')
// })

module.exports = router