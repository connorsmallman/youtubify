var express = require("express");
var request = require("request");
var path = require("path");
var app = express();

var serialize = require("./src/helpers/serialize");
var key = "AIzaSyBZ_urP_23209MzD8Q7y_63S3yX5szvpCI";

app.use(express.static(path.join(__dirname, 'dist/public')));
app.use(express.static(path.join(__dirname, 'dist/public/views')));

app.get("/", function(req, res) {
	res.render('index.html');
});

app.get("/api/videos/search", function (req, res) {
	var url = "https://www.googleapis.com/youtube/v3/search" + "?" + serialize(req.query) + "&key=" + key;

	request(url, function (error, response, body) {
	    if (error) {
	      return console.error('upload failed:', error);
	    }

	    var data = JSON.parse(body);

	    res.json(data.items);
  	});
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("Listening on " + port);
});