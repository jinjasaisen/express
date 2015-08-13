var express = require('express');
var router = express.Router();

/* GET  */
router.get('/del', function(req, res) {

//res.render('article', { pagename: 'article Post' });

var db = req.db;
var col = db.get('blend');

col.find({},rend);
function rend(e,docs){
        res.render('article', {
            "list" : docs,
"pagename":"delete list"
        });
}
    
});

router.post('/del_post', function(req, res) {
    var db = req.db;
    var col = db.get('blend');
    var rTitle = req.body.title;

col.find({title:rTitle},rend);
function rend(e,docs){
        res.render('del_post', {
            "del" : rTitle,
"pagename":"delete this post?"
        });
}

});


module.exports = router;
