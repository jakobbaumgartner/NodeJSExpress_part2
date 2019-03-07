const path = require('path')

module.exports = path.dirname(process.mainModule.filename)

// process.mainModule.filename pogleda kakšna je destinacija do datoteke iz katere začnemo izvajati program: app.js 

// Vse kar nam ta koda omogoča je, da dirname v drugih datotekah nadomestimo z spremenljivko 
// in tako naredimo kodo lepšo.

