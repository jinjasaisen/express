var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    var db = req.db;
    var col = db.get('blend');

col.find({},rend);
function rend(e,docs){
        res.render('blender', {
            "blender_content" : docs
        });
}


});


module.exports = router;
