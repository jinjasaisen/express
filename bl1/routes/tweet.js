var express = require('express');
var router = express.Router();
var url = require('url');
var urlInfo;
var Twitter = require('twitter');
var fs=require('fs');
var client = new Twitter({
  consumer_key: 'BXjEtP1sgoX3MByjlH9kY4Dfu',
  consumer_secret: 'TbpBYMJh768hetbFletjhzAIxLA7zrPHy6sOHF613LP9xcAgRq',
  access_token_key: '590035327-e4MXg31ECi2aeYaDEdnTOwwXWtiYCABrfUF0ufQK',
  access_token_secret: 'NomRQQ7FIWhVfJqfQkIiIeLBimaNj2CsKSxuiRq9S6y3m'
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
