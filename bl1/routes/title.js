var express = require('express');
var router = express.Router();

/* GET  */
router.get('/title', function(req, res) {

    var db = req.db;
    var col = db.get('blend');
    var conTerm = req.body.term;
    var conTitle = req.body.title;

col.find({term:conTerm},rend);
function rend(e,docs){
res.render('article', {
"term" : docs
});
}

});

router.post('/article', function(req, res) {
    var db = req.db;
    var col = db.get('blend');
    var conTerm = req.body.term;
    var conTitle = req.body.title;


    // Get our form values. These rely on the "name" attributes
//    var conTitle = req.body.title;

module.exports = router;
