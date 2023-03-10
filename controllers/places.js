const router = require('express').Router()
const places = require("../models/places.js")
const db = require('../models')
const { findById } = require('../models/places.js')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch( err => {
        console.log(err)
        res.render('error404')
    })
})


router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
          let message = 'Validation Error: '
          for (var field in err.errors) {
            message += `${field} was ${err.errors[field].value}.`
            message += `${err.errors[field].message}`
          }
          res.render('places/new', { message })
        }
        else {
        res.render('error404')
      }   
    })
})

//new
router.get('/new', (req, res) => {
  res.render('places/new')
})

//show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.put('/:id', (req, res) => {
  if (!req.body.city) req.body.city = undefined
  if (!req.body.state) req.body.state = undefined
  if (!req.body.founded) req.body.founded = undefined
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(place => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})


router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})





router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})


router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router


// //create
// router.post('/', (req, res) => {
//     if (!req.body.pic) {
//         req.body.pic = "https://placekitten.com/400/500"
//     }
//     if (!req.body.city) {
//         req.body.city = 'Anywhere'
//     }
//     if (!req.body.state) {
//         req.body.state = 'USA'
//     }
//     places.push(req.body)
//     res.redirect('/places')
// })

// //new
// router.get('/new', (req, res) => {
//     res.render('places/new')
// })


// //show
// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!places[id]) {
//       res.render('error404')
//     }
//     else {
//       res.render('places/show', { place: places[id], id: req.params.id})
//     }
// })


// //delete
// router.delete("/:id", (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         places.splice(id, 1)
//         //res.send('STUB DELETE places/:id')
//         res.redirect('/places')
//     }
// })

// //put
// router.put('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         if (!req.body.pic) {
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state = 'USA'
//         }
//         places[id] =req.body
//         res.redirect(`/places/${id}`)
//     }
// })

// //edit
// // router.get('/:id/edit', (req, res) => {
// //     let id = Number(req.params.id)
// //     if (isNaN(id)) {
// //         res.render('error404')
// //     }
// //     else if (!places[id]) {
// //         res.render('error404')
// //     }
// //     else {
// //         res.redirect('places/edit', { place: places[id] })
// //     }
// // })
  

// // EDIT
// router.get('/:id/edit', (req, res) => {
//     res.render('places/edit', { place: places[req.params.id], id: req.params.id })
// })
// // router.get('/:id', (req, res) => {
// //     (places[req.params.id])
// //       ? res.render('places/show', { place: places[req.params.id], id: req.params.id })
// //       : res.status(404).render('Error404')
// // })

// module.exports = router