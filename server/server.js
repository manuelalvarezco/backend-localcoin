//configuración global
require('./config/config')

const express = require('express')
const mongoose = require('mongoose');

const app = express()

const bodyParser = require('body-parser')

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(require('./routes/ciudad'))



mongoose.connect('mongodb://localhost/localcoin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err;

    console.log('Base de datos on line')
});


app.listen(process.env.PORT, () => {
    console.log('Corriendo en el puerto ', process.env.PORT)
})