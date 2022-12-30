const express = require('express')
const connectToMongo = require("./db");
const app = express()

const authRoute = require('./auth')
const noteRoute = require('./notes.js')


app.use(express.json())

// Availible Routes 
app.use('/api/auth', authRoute)
app.use('/api/notes', noteRoute)


const port = 3000

const start = async () => {
    try {
        await connectToMongo()
        app.listen(port, () => {console.log(`Server is listening on port ${port}...`)})
    } catch (error) {
    console.log(error);
    }
} 

    start()