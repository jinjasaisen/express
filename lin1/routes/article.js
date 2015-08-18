var express = require('express');
var router = express.Router();

/* GET  */
router.get('/article', function(req, res) {

//res.render('article', { pagename: 'article Post' });

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/linux.db');
var check;

db.each('SELECT title FROM linux where term=1', function(err, row) {
    if(err !== null) {
      next(err);
    }
    else {
      console.log(row);
      res.render('article', {title: row.title, pagename: 'article Post' },function(err, html) {
        res.send(200, html);
      });
    }
  });


//res.render('article', { pagename: 'article Post' });
    
});

router.post('/art_post', function(req, res) {


});


module.exports = router;
