var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express funcionando 2019!' });
});

router.get('/vai', function(req, res, next) {
  res.send('hahahah');
});

module.exports = router;
