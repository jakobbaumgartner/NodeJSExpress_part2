const path = require('path')

const express = require('express')

const router = express.Router()

// Express nam omogoča, da routanje izvedemo s pomočjo route elementa, ki se obnaša podobno kot app
// element le, da nam omogoča lažje exportanje v app.js datoteko. 

router.get('/newadded', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

//get req, ker hoče neko kodo - -informacije

router.post('/product', (req, res, next) => {
    console.log('productpage')
    console.log(req.body)
    res.send('<p>trrt</p>')

})

// post req, ker sprejme informacije

module.exports = router