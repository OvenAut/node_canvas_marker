
/**
 * Module dependencies.
 */

var express = require('express'),
    fs = require('fs'),
    util = require('util');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  //app.set('views', __dirname + '/views');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  //app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

// app.get('/', function(req, res){
//   res.render('index', {
//     title: 'Express'
//   });
// });

app.get(/^\/images\/[0-9a-f]{3}marker.png/,function(req,res) {
  // console.log(req.url);
  // var myRe = new RegExp("^\/images\/(\S{3})marker.png");
  



  var myRe = new RegExp("([0-9a-f]{3})");
  // console.dir(myRe)
	var colorArray = req.url.match(myRe,'');
	var color = colorArray[0];
	
	fs.readFile(__dirname + '/images/'+ color +'marker.png', function(err,squid){
		if (err) {
			var canvasMarker = require('./lib/marker.js');
			sendCanvas(canvasMarker.markerex(color));
		} else {
			sendCanvas(squid);
		}
	});
	// console.log(colorArray[0]);
	function sendCanvas(canvasMarker) {
		res.writeHead(200, { 'Content-Type': 'image/png','Cache-Control':'public, max-age=3600' });
	  res.end(canvasMarker);
	  util.log("send file " + color);
  }
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(4000);
  console.log("Express server listening on port %d", app.address().port);
}
