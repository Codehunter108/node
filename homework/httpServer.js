const http = require("http");
function startServer(port) {

    const server = http.createServer((req, res) => {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        res.end("Hello from Node.js HTTP Server");
    });
    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}
module.exports = startServer;