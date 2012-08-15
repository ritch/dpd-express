# dpd-express

use express as a dpd resource

## install

In your project root, run:

    mkdir node_modules
    npm install dpd-express
    
## events

There is only 1 event right now: init. Create it in the dashboard or include a folder like this:

    /my-project
     /resources
      /express
       /init.js

Init is run when the resource is loaded. Inside `init.js` you get `app` which is a running express app. Handle anything like a normal express app:

    app.get('/foo', function(req, res) {
      res.send('bar');
    });
  
or middleware

    app.use(function(req, res, next) {
      req.called = 'my middleware';
      next();
    });
  
In other resources, this will be available as `ctx.req.called`.

You also get access to the dpd object, bound to the current request.

Render some todos:

    app.get('/foo', function(req, res) {
      req.dpd.todos.get(function(todos) {
        res.render('index.ejs', {todos: todos})
      });
    });
  
The request also comes with the `me` object if it exists.

    app.get('/me', function(req, res) {
      res.send(req.me);
    });

You can `require()` modules. They must be installed at the root of your project (`/my-project/node_modules`).