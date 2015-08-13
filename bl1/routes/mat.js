var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/material', function(req, res, next) {

    var db = req.db;
    var col = db.get('blend');
    col.find({term:"material"},rend);

function rend(e,docs){
        res.render('material', {
            "mat_content" : docs
        });
}

});


module.exports = router;
