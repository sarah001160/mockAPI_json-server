const jsonServer = require('json-server'); // get package from the json store what we just installed 
const server = jsonServer.create(); // create and invoked like this 及建立變數 server
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // 顯示what port do we serve to

server.use(middlewares);  // 這樣我們才能在 router 使用 middlewares
server.use(router);
server.listen(port);