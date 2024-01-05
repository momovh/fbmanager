// Create the necessary folders
// Assuming you are using Node.js and Express.js
const express = require('express');
const app = express();

// Set up the view folder for the user interface
app.set('views', './view');
app.set('view engine', 'ejs'); // Assuming you are using EJS as the template engine

// Configure MongoDB in config/configdatabase.js
const mongoose = require('mongoose');
const { mongoURI } = require('./config/configdatabase');

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Start the server
const port = 3000; // Change this to your desired port number
app.listen(port, () => console.log(`Server running on port ${port}`));
