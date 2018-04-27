var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: '首页（简历）' });
});

router.get('/index', function(req, res, next) {
  res.render('index.html', { title: '首页（简历）' });
});

router.get('/history', function(req, res, next) {
  res.render('history.html', { title: '本站历史' });
});

router.get('/history-express', function(req, res, next) {
  res.render('history-express.html', { title: '创建express应用' });
});

router.get('/learning-linux', function(req, res, next) {
  res.render('learning-linux.html', { title: 'Linux学习' });
});

router.get('/learning-linux-alias', function(req, res, next) {
  res.render('learning-linux-alias.html', { title: 'Linux命令别名alias' });
});

router.get('/proverbs', function(req, res, next) {
  res.render('proverbs.html', { title: '每日一碗鸡汤' });
});

router.get('/learning-softs', function(req, res, next) {
  res.render('learning-softs.html', { title: '软件或工具收藏' });
});
module.exports = router;