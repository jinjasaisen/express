var express = require('express');
var router = express.Router();


/* GET  */
router.get('/add_post', function(req, res) {
    res.render('add_post', { title: 'Add Post' });
});

router.post('/add_post', function(req, res) {
    var db = req.db;
    // Get our form values. These rely on the "name" attributes
    var conTitle = req.body.title;
    var conVoc = req.body.voc;
    var conTerm = req.body.term;
    var conBody = req.body.body;

    // Set our collection
    var collection = db.get('blend');
    // Submit to the DB

   collection.insert({
        "title" : conTitle,
        "voc" : conVoc,
        "term" : conTerm,
        "body" : conBody

    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.render("error");
        }
        else {
            // And forward to success page
            res.redirect("blender");
        }
    });
});


module.exports = router;
