const http = require('http')
const express = require('express')
const bpar = require('body-parser')

const app = express()

app.use(bpar.urlencoded({extended: false}))
//tako naredimo middleware, ki parse body in nato kliče next, na naslednjo funkcijo

app.use('/newadded', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add !</button></form>')
})

app.use('/product', (req, res, next) => {
    console.log('productpage')
    console.log(req.body)
    res.redirect('/')

    // npm install body-parser


})

app.use('/', (req, res, next) => {
    res.send('<p>First page!</p>')
    console.log("firstpage")
 
})

app.listen(3000)