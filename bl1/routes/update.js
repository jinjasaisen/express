var express = require('express');
var router = express.Router();

/* GET  */
router.get('/update_post', function(req, res) {
    res.render('update_post', { title: 'update Post' });
});

router.post('/update_post', function(req, res) {
    var db = req.db;
    // Get our form values. These rely on the "name" attributes
    var conTitle = req.body.title;
    var conVoc = req.body.voc;
    var conTerm = req.body.term;
    var conBody = req.body.body;

    // Set our collection
    var collection = db.get('blend');

    // Submit to the DB

   collection.update({
        "title" : conTitle,
        "voc" : conVoc,
        "term" : conTerm,
        "body" : conBody

}, function (err) {
        if (err) {
throw err;
        }
    });
});

module.exports = router;
