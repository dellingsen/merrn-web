const express = require('express');
const path = require('path');
const app = express();

//1. use 'npm run build' to create production ready build directory
//2. then start this server with 'node prodServer.js'

app.use(express.static(path.join(__dirname, 'build')));

/*
The build folder with static assets is the only output produced by Create React App.
However this is not quite enough if you use client-side routing.

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
*/


/*
If you use routers that use the HTML5 pushState history API under the hood (for example, React Router with browserHistory), 
many static file servers will fail. For example, if you used React Router with a route for /todos/42, the development server 
will respond to localhost:3000/todos/42 properly, but an Express serving a production build as above will not.
This is because when there is a fresh page load for a /todos/42, the server looks for the file build/todos/42 and 
does not find it. The server needs to be configured to respond to a request to /todos/42 by serving index.html. 
For example, we can amend our Express example above to serve index.html for any unknown paths:
*/
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'build/index.html'));
})

app.listen(3000);
