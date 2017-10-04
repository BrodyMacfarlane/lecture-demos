const express = require('express'), // express is just a function
      app = express(), // when invoked, return an object with methods that we can now use in our application
      port = 3000,
      bodyParser = require('body-parser'),
      ctrl = require('./controller.js'); // don't forget the ./

      
// TOP LEVEL MIDDLEWARE      
app.use(bodyParser.json());
      
// ENDPOINTS
// endpoint pattern setup:
// app.METHOD(PATH, HANDLER-callback function)

app.get('/api/getUsers', ctrl.get)
app.post('/api/addUser', ctrl.post)
app.delete('/api/deleteUser/:id', ctrl.delete)


app.listen(port, () => console.log(`listening on port ${port}`)) // place app.listen() at the bottom of your file