// server.js
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
// Run the app by serving the static files
// in the dist directory
// app.use(express.static(__dirname + 'dist'));

// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname + 'dist/index.html'));
//   });

// Start the app by listening on the default
// Heroku port
// app.listen(process.env.PORT || 8080);

//* Parsers for POST data
// parse application/json
// app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
// Cross origin issue - Need to know more
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
