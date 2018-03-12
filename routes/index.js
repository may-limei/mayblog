var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

/* GET home page. */
router.get('/index.html', function(req, res, next) {
  res.render('index', { title: '首页' });
});

/* GET generic page. */
router.get('/generic.html', function(req, res, next) {
  res.render('generic.html', { title: 'generic' });
});

module.exports = router;
