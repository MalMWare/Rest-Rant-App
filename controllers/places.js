const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Gorilla Sushi',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Sushi, Japanese Food, Buffet/AYCE',
        pic: '/images/smallSushiDinner.jpg',
        id: 'sushi-dinner',
        credit: "https://unsplash.com/de/@metzograf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        source: "https://unsplash.com/photos/12IsagncQ7o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        creditName: 'Florian Metzner',
        sourceName: 'Unsplash'
    }, {
        name: 'Black Tap',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'American, Burgers, Shakes',
        pic: '/images/smallIcecream.jpg',
        id: 'icecream-shake',
        credit: "https://unsplash.com/@m_usm04?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        source: "https://unsplash.com/photos/OSpvTwWvjmU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        creditName: 'Muhammad Usman',
        sourceName: 'Unsplash'
  
    }]
    res.render('places/index', { places })
})

module.exports = router