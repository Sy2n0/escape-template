var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ESCAPE CTF 2023 | HOME' });
});

router.get('/test', function(req, res, next) {
  res.render('mobile', { title: 'ESCAPE CTF 2023 | HOME' });
});

/* Mobile */
router.get('/mobile', function(req, res, next) {
  res.render('mobile', { title: 'Notice' });
});

module.exports = router;
