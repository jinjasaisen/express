var express = require('express');
var router = express.Router();

/* GET  */
router.get('/del_post', function(req, res) {
    res.render('del_post', { title: 'delete Post' });
});

router.post('/del_post', function(req, res) {
    var db = req.db;
    var rTitle = req.body.title;
    var col = db.get('blend');
   col.remove({
        "title" : rTitle

    }, function (err) {
        if (err) {
throw err;
        }
    });
});


module.exports = router;
