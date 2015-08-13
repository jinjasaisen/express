var express = require('express');
var router = express.Router();

/* GET  */
router.get('/art_get', function(req, res) {

    var db = req.db;
    var col = db.get('blend');

col.find({term:conTerm},rend);
function rend(e,docs){
res.render('article', {
"content" : docs
        });
}
        });
module.exports = router;
