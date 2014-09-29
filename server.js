//Dependencies
var express = require('express');
var session = require('express-session');
<<<<<<< HEAD
var fs = require('fs');
var http = require('http');
var path = require('path');
//var favicon = require('static-favicon');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var methodOverride = require('method-override');
var flash = require('flash');
//Databases
//console.log("Mongoose Connect");
var env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env];

mongoose.connect(config.db);

var models_dir = __dirname + '/public/models';
fs.readdirSync(models_dir).forEach(function (file) {
   if(file[0] === '.') return; 
   require(models_dir+'/'+ file);
});

//passport
require('./config/passport')(passport, config)


//App configure
var app = express();
app.set('port', process.env.PORT || 3007);

//app.set('views', __dirname + '/public/views');
//  app.set('view engine', 'jade');
console.log("favicon");
app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev'));

app.use(cookieParser());
app.use(bodyParser());
app.use(session({ secret: 'Omega3' }));

//passport initialization  
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride());
app.use(flash());

  //app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));


  //app.use(express.errorHandler());


app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.render('500', { error: err });
});

app.use(function(req, res, next){
  res.status(404);
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  res.type('txt').send('Not found');
});

console.log("App Passport");
//routes
require('./config/routes')(app, passport);


//start the server
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
console.log('The magic happens at ' + app.get('port'));
=======

var path = require('path');
var favicon = require('static-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var passport = require('passport');
var flash  = require('connect-flash');

var fs = require('fs');

//Databases
//console.log('Mongoose');
var mongoOptions = { db: { safe: true } };
var configDB = require('./config/database.js');
console.log("Mongoose Connect");
//mongoose.connect(configDB.url); // connect to our database
mongoose.connect(configDB.url, mongoOptions, function (err, res) {
  if (err) {
   console.log ('ERROR connecting to: ' + configDB.url + '. ' + err);
  } else {
   console.log ('Successfully connected to: ' + configDB.url);
   }
 });

var modelsPath = path.join(__dirname, './models');
fs.readdirSync(modelsPath).forEach(function (file) {
  require(modelsPath + '/' + file);
});
 
//Passport SerializeUser
var pass = require('./config/pass.js');

console.log("Configuration");
// Configuration
var app = express();
app.set('port', process.env.PORT || 3002);
console.log("Morgan");
app.use(morgan('dev'));

// app.configure('development', function(){
  // app.use(express.static(path.join(__dirname, '.tmp')));
  // app.use(express.static(path.join(__dirname, 'app')));
  // app.use(express.errorHandler());
  // app.set('views', __dirname + '/app/views');
// });

// app.configure('production', function(){
  // app.use(express.favicon(path.join(__dirname, 'public', 'favicon.ico')));
  // app.use(express.static(path.join(__dirname, 'public')));
  // app.set('views', __dirname + '/views');
// });

console.log("Public");
app.use(morgan('public'));
app.use(express.static(path.join(__dirname, 'public')));
console.log("Public");
app.set('view engine', 'html');
//app.use(logger('dev'));

//CookieParser
console.log("cookieParser");
app.use(cookieParser());

//BodyParser
console.log("bodyParser");
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//MethodOverride
//app.use(methodOverride());


//Session Storage
// app.use(session({
  // secret: 'Omega3',
  // store: new mongoStore({
    // url: configDB.url,
    // collection: 'sessions'
  // })
// }));
app.use(session({ secret: 'Omega3' })); // session secret

//Passport Initialize
console.log("Passport");
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//routes should be at the last
console.log("router");
//app.use(app.router);
console.log("routes");
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured 

//Flash
//app.use(flash()); // use connect-flash for flash messages stored in session


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
console.log('The magic happens at' + app.get('port'));
>>>>>>> a5a767a3005b008263eba550db54c1d775a20fff
