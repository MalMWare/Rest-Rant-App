const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Gorilla Sushi',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Sushi, Japanese Food, Buffet/AYCE',
        pic: 'https://placekitten.com/250/250'
    }, {
        name: 'Black Tap',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'American, Burgers, Shakes',
        pic: 'https://placekitten.com/250/250'
    }]
    res.render('places/index', { places })
})

module.exports = router