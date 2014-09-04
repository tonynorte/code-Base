// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var hbs		   = require('hbs'); 			//handlebars
var sass 	   = require('node-sass');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to use with sass

app.use('/static', express.static(__dirname + '/app'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(
  sass.middleware({
    src: __dirname + '/app/sass',
    dest: __dirname + '/app',
    debug: true,
    outputStyle: 'compressed'
  })
);


var port = 3444; 	  // set our port

module.exports = app; //to refresh

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
	var d = new Date();
	var n = d.getFullYear();
	//res.json({ message: 'hooray! welcome to our api!' });	
	res.render('index.html', {title: 'Bancomer', year: n});	
});

//router.get('/about', function (req, res) {
//	var d = new Date();
//	var n = d.getFullYear();
//	//res.json({ message: 'hooray! welcome to our api!' });	
//	res.render('index.html', {title: 'Bancomer About Us', year: 2012});	
//});

// router.get('/:name', function(req, res) {

// 	res.send('hello ' + req.params.name + '!');
// });
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);