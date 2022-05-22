//const http = require('http');

function serveHomePage(httpRequest, httpResponse) {
    //httpResponse.statusCode = 200;
    httpResponse.setHeader('Content-Type', 'text/html');
    httpResponse.writeHead(200, 'Pura Vida');
    httpResponse.write('<h1>Hi from my web server.</h1>\n');
    httpResponse.write('<hr/><small>My Node.js Web Server.</small>\n')
    httpResponse.end();
}

function serveNotFoundPage(httpRequest, httpResponse) {
    httpResponse.statusCode = 404;
    httpResponse.statusMessage = "Not Found"
    httpResponse.setHeader('Content-Type', 'text/html');
    httpResponse.writeHead(200, 'Pura Vida');
    httpResponse.write('<h1>404 Error - Page Not Found</h1>\n');
    httpResponse.write('<hr/><small>My Node.js Web Server.</small>\n')
    httpResponse.end();
}

function handleHttpRequest(httpRequest, httpResponse) {
    console.log(`${httpRequest.method} ${httpRequest.url}`);
    //console.log(httpRequest);
    if(httpRequest.method === "GET" && httpRequest.url === '/') {
        return serveHomePage(httpRequest, httpResponse);
    } else {
        // Serve 404 error page.
        return serveNotFoundPage(httpRequest, httpResponse);
    }
}
// This is a way to do it, the other is to declare module.exports = {} up
// and put module.exports.handleHttpRequest = func...
module.exports = {handleHttpRequest : handleHttpRequest}