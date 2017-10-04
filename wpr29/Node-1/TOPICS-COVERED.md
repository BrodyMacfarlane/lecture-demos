# Node.js
- Javascript runtime enviroment. Allows us to run JS in our backend outside of our browser by using Chrome's V8 javascript engine.

# NPM 
- Node Package Manager
- Allows you to install and maintain dependencies through package.json. 
    - package.json keeps track of dependencies' versions 
    - package-lock.json keeps track of the dependency tree versions
- Node_modules: do not push to github, include it in your .gitignore

# Express
- Framework for Node.js
### Basic server set up
- `npm init -y`
- `npm install --save express body-parser` 
- Create a .gitignore and include your node_modules in that file
- Create an `index.js`
- In your `index.js`

    ```js
    const express = require('express'),
          bodyParser = require('body-parser'),
          port = 3000,
          app = express();

    app.use(bodyParser.json())

    app.listen(port, () => console.log(`listening on port ${port}`))
    ```
- When requiring files remember 
  - `./` if it's a file you created
  - just the name if it's coming from node_modules


# Endpoints
- get, put, post, delete
`app.METHOD(PATH, HANDLER FUNCTION)`
- Good to use `/api` with your endpoint paths
- `.status()` sets the status code of your response
- `.send()` sends the data
    - difference between `.send()` and `.json()`, if `.send()` does not receive an object or array, it will convert it to HTML. `.json()` will not.
- For the handler callback function, parameter order is crucial! Remember, you have to receive a request before you can send a response.
`app.get('/api/getAll', (req, res) => ... )`

# req.params
- URL Parameters
- Parameters are required, you cannot hit an endpoint if they are not included in the URL
- `req.params` is an object. The property name is indicated in the endpoint path url with a colon. Ex: `/api/book/:id`. The value comes from the URL.

# req.body
- The body of information from the request
- MUST HAVE `app.use(bodyParser.json())` or req.body will not exist.
    - Body parser should be in an app.use() at the top (top-level middleware) above your endpoints. Any endpoint above it will not be affected by it.

# Controller File
- Good organization and helps readability.
- Require the file into your `index.js`
- What is brought into your `index.js` when you require it will be whatever it inside of your `module.exports = {...}`
    - `module.exports` can be set equal to an object, string, function, etc... It does not matter. More often than not it will be an object with methods.