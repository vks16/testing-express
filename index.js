const express = require('express');
const path = require('path');



// logger is a middleware that takes req, res and next
// const logger = require('./logger');


// Init express
const app = express();
const PORT = process.env.PORT || 5000;



//Init middleware logger
// app.use(logger);

// Body Parser Middleware
app.use(express.json());  // this allows to handle raw json
app.use(express.urlencoded({extended: false})); // to handle form submission

// set a static folder
// app.use() use method is used to include middleware
app.use(express.static(path.join(__dirname, 'build')));

// use router in router/api/members.js
app.use('/api/members', require('./routes/api/members'))

// Create your endpoints/route handlers
// app.get('/', function(req, res) {
// 	// res.json() for json
// 	// res.render() to render template
// 	// res.sendFile() can be used to send file.
	
// 	res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Listen on a port;
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
