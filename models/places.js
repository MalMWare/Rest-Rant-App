// module.exports = [{
//     name: 'Gorilla Sushi',
//     city: 'Las Vegas',
//     state: 'NV',
//     cuisines: 'Sushi, Japanese Food, Buffet/AYCE',
//     pic: '/images/smallSushiDinner.jpg',
//     class: 'sushi-dinner',
//     credit: "https://unsplash.com/de/@metzograf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
//     source: "https://unsplash.com/photos/12IsagncQ7o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
//     creditName: 'Florian Metzner',
//     sourceName: 'Unsplash'
// }, {
//     name: 'Black Tap',
//     city: 'Las Vegas',
//     state: 'NV',
//     cuisines: 'American, Burgers, Shakes',
//     pic: '/images/smallIcecream.jpg',
//     class: 'icecream-shake',
//     credit: "https://unsplash.com/@m_usm04?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
//     source: "https://unsplash.com/photos/OSpvTwWvjmU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
//     creditName: 'Muhammad Usman',
//     sourceName: 'Unsplash'
// }]

const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true},
    pic: String,
    cuisines: { type: String, required: true},
    city: { type: String, default: 'Anytown'},
    state: { type: String, defsult: "USA"},
    founded: Number
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)