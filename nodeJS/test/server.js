var http = require('http'),
    fs = require('fs');

/**
 * 404
 * @param res
 * @constructor
 */
var Err404 = function(res) {
    res.writeHead(404, {'Content-Type' : 'text/plain'});
    res.write('404 not found');
    res.end()
};


/**
 * 200
 * @param req
 * @param res
 */
var onReq = function(req, res) {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        //res.write("hello access")
        fs.createReadStream('./index.html').pipe(res)
    }
    else {
        Err404(res)
    }
};


http.createServer(onReq).listen(8888);
















