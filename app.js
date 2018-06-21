var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var regist = require('./routes/regist');
var login = require('./routes/login');
var user_detail = require('./routes/user_detail');
var write_blog = require('./routes/write_blog');
var blog_list = require('./routes/blog_list');
var blog_count = require('./routes/blog_count');
var blog_content = require('./routes/blog_content');
var blog_comment = require('./routes/blog_comment');
var blog_delete = require('./routes/blog_delete');
var blog_update = require('./routes/blog_update');
var write_comments = require('./routes/write_comments');
var search_blog = require('./routes/search_blog');
var sessionGet = require('./routes/sessionGet');
var sessionSet = require('./routes/sessionSet');
var manager_add = require('./routes/manager_add');
var manager_get = require('./routes/manager_get');
var manager_delete = require('./routes/manager_delete');
var creator_add = require('./routes/creator_add');
var creator_get = require('./routes/creator_get');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'sessionSecret',
  saveUninitialized: true,
  resave: true
}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', index);
app.use('/regist', regist);
app.use('/login', login);
app.use('/user_detail', user_detail);
app.use('/write_blog', write_blog);
app.use('/blog_list', blog_list);
app.use('/blog_count', blog_count);
app.use('/blog_content', blog_content);
app.use('/blog_comment', blog_comment);
app.use('/blog_delete', blog_delete);
app.use('/blog_update', blog_update);
app.use('/write_comments', write_comments);
app.use('/search_blog', search_blog);
app.use('/sessionGet', sessionGet);
app.use('/sessionSet', sessionSet);
app.use('/manager_add', manager_add);
app.use('/manager_get', manager_get);
app.use('/manager_delete', manager_delete);
app.use('/creator_add', creator_add);
app.use('/creator_get', creator_get);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
