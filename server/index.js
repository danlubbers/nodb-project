// Express Node Server
const express = require('express');
const bodyParser = require('body-parser');
const gearController = require('./gear-controller.js');


const app = express();

// Top Level Middleware
app.use( bodyParser.json() );

// EXAMPLE
// app.get('/api/stuff', (req, res) => {
    // res.status(200).send(stuff)
// })

// Create variable for API
const gearBaseURL = '/api/gear';

// Create our Endpoint
app.get(gearBaseURL, gearController.read);

app.post(gearBaseURL, gearController.create);

app.put(`${gearBaseURL}/:id`, gearController.update);

app.delete(`${gearBaseURL}/:id`, gearController.delete);

// App.Listen should be on port 3005
const port = 3005;
app.listen( port,  () => {console.log(`I am always listen to you on port ${port}`);});