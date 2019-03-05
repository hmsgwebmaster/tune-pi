const http = require('http');
const querystring = require('querystring');
const config = require('./config.json');
const Gpio = require('onoff').Gpio;
const Bs = new Gpio( 4 , 'in' , 'falling');

let id = config.api.username + ':' + config.api.password;

const options = {
	hostname: config.api.hostname,
	port: 80,
	path: config.api.endpoint,
	method: 'PATCH',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/x-www-form-urlencoded',
		'cache-control': 'no-cache'
	},
	auth: id
};

const wpAPIupdate = () => {
	let currentTime = new Date();
    	console.log(`Current loop started at: ${currentTime}`);

	const patchData = querystring.stringify({
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

	req.write(patchData);
	req.end();
}

Bs.watch((err,value) => {

	/* if (err) {
		console.log(`Error: ${err}` );
	} */

	value: wpAPIupdate();

});
