var express = require('express');
var router = express.Router();

/* GET  */
router.get('/article', function(req, res) {

//res.render('article', { pagename: 'article Post' });

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/linux.db');

var posts=[];

db.serialize(function() {
    db.each("SELECT * FROM linux where term=1", function(err, row) {
        posts.push({title: row.title, term: row.term })
    }, function() {
        // All done fetching records, render response
        res.render("article", {pagename: "sqlite", posts: posts})
    })
});


  });


router.post('/art_post', function(req, res) {


});


module.exports = router;
