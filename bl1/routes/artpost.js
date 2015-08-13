var express = require('express');
var router = express.Router();

router.get('/art_post', function(req, res) {

    var db = req.db;
    var col = db.get('blend');

res.render("art_post",{pagename:"artpost"})
});

// router.post('/art_post', function(req, res) {
//     var db = req.db;
//     var conTerm = req.body.term;

// res.render("art_get",{term:conTerm});
//         });

module.exports = router;
