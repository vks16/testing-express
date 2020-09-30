// moment deals with date time formating
const moment = require('moment');

// Create a simple middleware function
const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
	next();
} 

module.exports = logger;