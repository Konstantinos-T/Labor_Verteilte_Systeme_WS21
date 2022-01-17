require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./queries')
const app = express()


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)
app.use(cors())

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
})

app.get('/items', db.getItems)

app.get('/items/:id', db.getItemById)

app.post('/items', db.createItem)

app.put('/items/:id', db.updateItem)

app.delete('/items/:id', db.deletItem)

app.listen(process.env.API_PORT, () => {
    console.log(`App is running on port ${process.env.API_PORT}`)
})

