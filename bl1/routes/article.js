var express = require('express');
var router = express.Router();

/* GET  */
router.get('/article', function(req, res) {

//res.render('article', { pagename: 'article Post' });

var db = req.db;
var col = db.get('blend');

col.find({},rend);
function rend(e,docs){
        res.render('article', {
            "list" : docs,
"pagename":"title list"
        });
}
    
});

router.post('/art_post', function(req, res) {
    var db = req.db;
    var col = db.get('blend');
    var rTitle = req.body.title;
    var rTerm = req.body.term;
    var rBody = req.body.body;

col.find({title:rTitle},rend);
function rend(e,docs){
        res.render('art_post', {
            "list" : docs,
"pagename":"title list"
        });
}


// res.render("art_post",{title:rTitle,
// pagename:"result",
// term:rTerm,
// body:rBody
// });


});


module.exports = router;
