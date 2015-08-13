var express = require('express');
var router = express.Router();
var url = require('url');
var urlInfo;
var Twitter = require('twitter');
var fs=require('fs');
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

router.get('/tweet', function(req, res, next) {

client.get('search/tweets',{q: 'blender, 3d'}, function(error, tweets, response){
  if(error) throw error;

//res.send(tweets);

var stat=[];
var content=[];
var arr=[];
for(i=0;i<10;i++){
stat[i] = tweets.statuses[i];

//console.log(stat[i].text);

}//for

console.log(stat[0]);

res.render("tweet",{
tw0: stat[0],
tw1: stat[1],
tw1: stat[1],
tw2: stat[2],
tw3: stat[3],
tw4: stat[4],
tw5: stat[5]
}
);


//res.send(stat[0]);


});
});


module.exports = router;
