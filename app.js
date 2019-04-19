// this is needed for importing expressjs into our application
const express = require('express')
const appConfig = require('./config/appConfig')
const mongoose = require('mongoose')
const app = express()

app.listen(appConfig.port, () => {
    console.log('Listening on port 3000');
    mongoose.connect(appConfig.db.uri, { useNewUrlParser: true });
})

// event handling on database connection error
mongoose.connection.on('error', function (err) {
    console.log('Database connection error: ' + err);
});

// event handling on database connection open success
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("Database error: " + err);
    } else {
        console.log("Database connection open success");
    }
}); 



