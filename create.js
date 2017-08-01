// # **Instructions**

// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//   * Generate the good/bad phrase randomly from a list of predefined phrases
//   * Use t


var http = require('http');

var port = 7000;

var port2 = 7500;

function handleRequest(request, response)
{
	response.end('tell good things:' + requesturl);
}

var server = http.createServer(handleRequest);

server.listen(port, function () {

	console.log('tell good things: '+ port)
});

function handleRequest(request, response)
{
	response.end('tell bad things:' + requesturl);
}

var server2 = http.createServer(handleRequest);

server.listen(port2, function () {

	console.log('tell bad things: '+ port2)
});


