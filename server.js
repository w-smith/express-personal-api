// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    // woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to Greg's place.",
    documentation_url: "https://github.com/w-smith/express_self_api/README.md", 
    base_url: "http://still-shore-68963.herokuapp.com", 
    endpoints: [
      {method: "GET", path: "/api", description: "Mah endpoints"},
      {method: "GET", path: "/api/profile", description: "DIS ABOUT ME"},
      {method: "POST", path: "/api/videogames", description: "Some Video Games I like"},
      {method: "DELETE", path: "/api/videogames/:id", description: "Delete games from the list"}
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
