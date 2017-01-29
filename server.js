// const connect = require('connect');

// const app = connect();



// app.listen(3000);
// console.log('Server running at http://localhost:3000/');

// app.use('/hello', (req, res, next) =>{
//   res.setHeader('Content-Type', 'text/plain');
//   res.end("hello world");
//   next();
// });

// app.use('/', (req, res, next) =>{
//   res.setHeader('Content-Type', 'text/plain');
//   res.end("Welcome");
//   next();
// });


// your server will live here

// import the 3rd party connect module and
// assign it as a reference to the connect variable

let express = require('express');

// create an instance of the connect server - app
let app = express();

// create the port constant
const localport = 3000;

// get port from environment and store in Express
let port = process.env.PORT || localport;
app.set('port', port);

// start listening on the port
app.listen(port);
console.log(`Server started at http://localhost:${port}`);

// ROUTING

// second route is '/hello'
app.use('/hello', (req, res, next) => {

  res.send("Hello, World!");

  next();

});

// first route is '/' - root of my website
app.use('/', (req, res, next) => {

  res.send("Welcome!");

});

module.exports = app;


