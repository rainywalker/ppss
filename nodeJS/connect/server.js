var connect = require('connect'),
    http = require('http'),
    app = connect();


function about(req, res) {
    console.log('사용자가 about를 요청했습니다');
}

function email(req, res) {
    console.log('사용자가 email를 요청했습니다')
}
app.use('/about',about);
app.use('/email',email);
http.createServer(app).listen(8888);



console.log('server start');


