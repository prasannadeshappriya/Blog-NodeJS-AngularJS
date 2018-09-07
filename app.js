let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let prerender = require('prerender-node');
let compression = require('compression');

let routes = require('./app/routes/index');
let cors = require('cors');
let app = express();
app.use(cors());

//Setup prerender.io for search engines
//Dynamic content does not crowl correctly by google, temporary delete this
/*
require('./config/google-seo')(prerender);
app.use(prerender);
*/

app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes for static files, SEO and other purposes
app.get('/sitemap.xml', function(req, res, next) {
    return res.status(200).sendFile(
        'assets/files/sitemap.xml',
        {root: './public'});});

app.use('/api', routes);
//app.use('/user', routes);
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile(__dirname + '/public/dist/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error_status: err.status,
        home: 'https://prasanna.alwaysdata.net'
    });
});

module.exports = app;
