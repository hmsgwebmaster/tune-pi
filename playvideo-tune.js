const omx = require('omxctrl');
const http = require('http');
const querystring = require('querystring');
const config = require('./config3.json');

let i = 0;

let id = config.api.username + ':' + config.api.password;

const options = {
	hostname: config.api.hostname,
	port: 80,
	path: config.api.path,
	method: 'PATCH',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/x-www-form-urlencoded',
		'cache-control': 'no-cache'
	},
	auth: id
};


omx.on('playing', () => {
	wpAPIupdate();
});

omx.on('ended', () => {

    	console.log('Loop ' + (i+1) + ' has ended');

    	while(i < 2 ){
		playvideo();
		i++;
	}
});

function playvideo() {
	omx.play(config.player.file, ['--aspect-mode fill']);
}

function wpAPIupdate(){
	let currentTime = new Date();
    	console.log('Current loop started at: ' + currentTime);

	const postData = querystring.stringify({
	'media_current_time' : '0'
	});

	let req = http.request(options);

	req.on('response' , (res) =>{
		res.setEncoding('utf8');

		console.log(`STATUS: ${res.statusCode}`);
  		console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

		res.on('data', (chunk) => {
    			console.log(`BODY: ${chunk}`);
  		});

  		res.on('end', () => {
			console.log('No more data in response.');
  		});
	});

	req.on('error', (e) => {
  		console.error(`problem with request: ${e.message}`);
	});

	req.write(postData);
	req.end();
}

playvideo();
