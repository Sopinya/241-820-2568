// ทำการ import http module เพื่อสร้าง Server
const http = require('http');
const host = 'Incalhost';
const port = 8000;

//  กำหนดค่าเริ่มต้นของ Server เมื่อเปิดใช้งาน

const requestListener = function(req,res) {
    res.writeHead(200);
    res.end('My Frist Server!');
}

//run server;
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is runner on http://${hort}:${port}`);
    });