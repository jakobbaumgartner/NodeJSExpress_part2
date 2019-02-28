const express = require('express')

const path = require('path')
//še eden od osnovnih elementov node.js

const router = express.Router()

//pomembno je, da uporabimo get metodo, da saj drugače preprečimo error 404

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
})

// Če bi uporabili le /views/shop.html bi nodejs gledal v root directory na računalniku in ne bi našel datoteke
// __direname (dva podčrtaja) nam poda pot do našega direktorija (posebna "spremelnjivka"), lahko bi napisali
// __direname/views/shop.html, vendar pa uporabimo path.join zmožnost node.js, ki nam odpravi nesoglasje
// datotečnega sistema linuxa in windowsa (en ima / in drugi \ neumno)
// ../ nas da v parent directory


module.exports = router