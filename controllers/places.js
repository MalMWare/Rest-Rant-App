const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Gorilla Sushi',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Sushi, Japanese Food, Buffet/AYCE',
        pic: '/images/smallSushiDinner.jpg',
        id: 'sushi-dinner',
        credit: 'Photo by <a href="https://unsplash.com/de/@metzograf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Florian Metzner</a> on <a href="https://unsplash.com/photos/12IsagncQ7o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    }, {
        name: 'Black Tap',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'American, Burgers, Shakes',
        pic: '/images/smallIcecream.jpg',
        id: 'icecream-shake',
        credit: 'Photo by <a href="https://unsplash.com/@m_usm04?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Muhammad Usman</a> on <a href="https://unsplash.com/photos/OSpvTwWvjmU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
  
    }]
    res.render('places/index', { places })
})

module.exports = router