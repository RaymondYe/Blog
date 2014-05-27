/* GET home page. */
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index', {
      title: 'Teemo'
    });
  });

  app.get('/news', function(req, res) {
    res.json({
      "name": "raymond",
      "age": 24
    });
  });

  app.get('/d', function(req, res) {
    res.download('../css/main.css');
  });
};