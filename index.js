const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hewwo? :3')
})

app.listen(3000)