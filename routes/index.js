var crypto = require('crypto'),
    User = require('../models/user.js');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index', {
      title: 'Home'
    });
  });

  app.get('/login', function(req, res) {
    res.render('login', {
      title: 'Login'
    });
  });

  app.get('/reg', function(req, res) {
    res.render('reg', {
      title: 'REGISTER'
    });
  });

  app.get('/post', function(req, res) {
    res.render('post', {
      title: 'Post'
    });
  });

  app.get('/logout', function(req, res) {
    res.render('logout', {
      title: 'Teemo'
    });
  });

  app.get('/d', function(req, res) {
    res.download('../css/main.css');
  });
};