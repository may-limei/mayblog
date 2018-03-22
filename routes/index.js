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

/* GET about page. */
router.get('/about.html', function(req, res, next) {
  res.render('about.html', { title: '本站历史' });
});

/* GET creatExpress page. */
router.get('/creatExpress.html', function(req, res, next) {
  res.render('creatExpress.html', { title: '创建express应用' });
});

module.exports = router;
