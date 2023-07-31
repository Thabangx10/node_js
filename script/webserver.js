const http = require("http");

// We want to assign a port to our application

// We save any sensitive information to a file ending with '.env'

// PORT number 3000

const port = parseInt(process.env.PORT || 3000);

// Creating a server
http
  .createServer((req, res) => {
    // response
    // What was the method you used to get data
    // For the browser we use, GET

    res.end("Well Done!");
  })
  .listen(port, () => {
    console.log(`Running on ${port}`);
  });


  