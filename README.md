This is CRUD application built on express.js

> localhost:5000/   runs a static web application built in github.com/vks16/react-login repository.

> localhost:5000/api/members      has rest api

* /api/members      lists members
* /api/members/1    list member with id 1
* /api/members/:id has PUT, DELETE as well

* /api/members/     has a POST request to create a new member.


> yarn dev  runs it in development mode  ( nodemon index.js)
> yarn start runs it in production mode ( node index.js)