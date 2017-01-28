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
<<<<<<< HEAD
let express = require('express');

// create an instance of the connect server - app
let app = express();
=======
let connect = require('connect');

// create an instance of the connect server - app
let app = connect();
>>>>>>> b63fad330624c108f38900a4f73906c9c63cd08f

// create the port constant
const port = 3000;

// start listening on the port
app.listen(port);
console.log(`Server started at http://localhost:${port}`);

// ROUTING

// second route is '/hello'
app.use('/hello', (req, res, next) => {
<<<<<<< HEAD
  res.send("Hello, World!");

=======
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello, World!");

  next();
>>>>>>> b63fad330624c108f38900a4f73906c9c63cd08f
});

// first route is '/' - root of my website
app.use('/', (req, res, next) => {
<<<<<<< HEAD
  res.send("Welcome!");

});

module.exports = app;
=======
  res.setHeader('Content-Type', 'text/plain');
  res.end("Welcome!");

  next();
});
>>>>>>> b63fad330624c108f38900a4f73906c9c63cd08f
