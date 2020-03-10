var path=require("path")
var subdomain = require('express-subdomain');
var express = require("express");
var kasukasu=express.Router();
kasukasu.use(express.static('kasukasu'))
var app = express();
app.use('/css', express.static(__dirname + '/public/css'));
kasukasu.use('/css', express.static(__dirname + '/public/css'));
app.use(express.static('public'));
app.use(subdomain("kasukasu",kasukasu));
app.use('/images',express.static(__dirname+'/public/resources/images'))
kasukasu.get('/', function(req,res){
	console.log(__dirname);
	res.sendFile(path.join(__dirname+"/kasukasu/kasukasu.html"));
});
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'/public/home.html'));
});

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});