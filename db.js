const mongoose = require("mongoose");

// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";


// use this demo url
const mongoURI = "mongodb://0.0.0.0:27017";

const connectToMongo = () => {
    return mongoose
    .connect(mongoURI, {
      useNewUrlParser: true, // so that db is ready to accept more than one data
      useUnifiedTopology: true, // so that db follows the schema provided only by the user
    })
    .then(() => {
        console.log('Connected to database');
    })
}

module.exports = connectToMongo