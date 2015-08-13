var express = require('express');
var router = express.Router();

router.get('/del_post', function(req, res) {

    var db = req.db;
    var col = db.get('blend');
    var rTitle = req.body.title;
   col.remove({
        "title" : rTitle

    }, function (err) {
        if (err) {
throw err;
        }
    });

// res.render("del_post",{pagename:"artpost",
// message:"post deleted"
// });

});

// router.post('/art_post', function(req, res) {
//     var db = req.db;
//     var conTerm = req.body.term;

// res.render("art_get",{term:conTerm});
//         });

module.exports = router;
