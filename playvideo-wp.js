var omx = require('omxctrl');
var WPAPI = require('wpapi');
var config = require('./config.json');

var i = 0;

var wp = new WPAPI({
	endpoint: config.api.endpoint,
	username: config.api.username,
	password: config.api.password
});

wp.artwork = wp.registerRoute('wp/v2', '/artwork/(?P<id>)');


omx.on('playing', function() {
	wpAPIupdate();
});

omx.on('ended', function() {

    console.log('Loop ' + (i+1) + ' has ended');

    while(i < config.player.repeat ){
	playvideo();
	i++;
    }
});

function playvideo() {
	omx.play(config.player.file, ['-b']);
}

function wpAPIupdate(){
	var currentTime = new Date();
    	console.log('Current loop started at: ' + currentTime);
	wp.artwork().id(config.api.postID).update({
	last_timestamp : currentTime
	 }).then(function(response) { console.log(response.last_timestamp); });
}

playvideo();
