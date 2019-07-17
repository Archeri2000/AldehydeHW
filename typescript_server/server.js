"use strict";
// NPM has been set up to import capitalise as a module from the first assignment
var caps = require("capitalise_js");
var Http = module;
('http');
var CapsServer = /** @class */ (function () {
    function CapsServer() {
        this.header = { 'Content-Type': 'text/plain' };
        var server = Http.createServer(this.onRequest);
        server.listen(3000);
        console.log("Server starting..");
    }
    CapsServer.prototype.onRequest = function (request, response) {
        response.writeHead(200, this.header);
        response.end("Hello TypeScript & node.js");
    };
    return CapsServer;
}());
var server = new CapsServer();
