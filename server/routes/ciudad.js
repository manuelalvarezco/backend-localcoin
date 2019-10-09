const express = require('express')
const app = express()


app.get('/ciudad', (req, res) => {
    res.json('GET')
})

app.get('/ciudad/:id', (req, res) => {
    res.json('GET ID')
})

app.post('/ciudad', function(req, res) {

    let body = req.body;

    res.json({
        ciudad: body
    })
})

app.put('/ciudad/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    })
})

app.delete('/ciudad/:id', (req, res) => {
    res.json('DELETE')
})

module.exports = app;