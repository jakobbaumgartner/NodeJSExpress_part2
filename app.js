const http = require('http')
const express = require('express')
const bpar = require('body-parser')
// npm install body-parser


const app = express()

//importamo routes datoteke
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bpar.urlencoded({extended: false}))
//tako naredimo middleware, ki parse body in nato kliče next, na naslednjo funkcijo

app.use(adminRoutes)
//uporabimo routes v routes files

app.use(shopRoutes)
// app.use('/shop', shopRoutes)
//"filteer" /shop nam omogoča, da so shopRoutes le strani, ki se začno z /shop/ ... recimo /shop/clothes

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found! 404</h>')
    //page not found status code 404 lahko ustvarimo tako, da ji določimo naslov '/', ki ga dobimo, ko ni nobena druga zahteva izpolnjena
    //pred send lahko verižimo ukaze, recimo status in pa setHeader
    console.log("404")
 
})

//app.get deluje podobno kot app.use le, da se sproži le pri get request
//get req pomeni, da želi info
//app.get()

// app.post pa deluje kot app.use, sproži se na post request
//post pomeni, da dobi server ( mi ) info
// app.post() 

app.listen(3000)