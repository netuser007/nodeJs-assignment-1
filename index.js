//console.log('server started!');
const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());

// for getting the product information
const catalogApi = require('./apis/catalog.api').apis;

// security api
const authorize = require('./security/security').authorize;

// for parsing the request body.
server.use(express.json()); 

// let server listen to 6650 port
server.listen('6650',() => {
    console.log('server is up and running on port 6650!');
});

//check for the health of the server/app
server.get('/health',(req, res) => {
  res.send('server is up and running!');
});

server.get('/unauthorise',(req,res) => {
 res.status(401).send({
     status : 'ERROR',
     message : 'Incorrect user name or password !'
 });
});

//add security to products Api
server.use('/products',(req,res, next ) => {
    authorize(req,res, next);
});

//for Routes
server.use('/products',catalogApi);