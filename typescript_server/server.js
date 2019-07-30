"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// NPM has been set up to import capitalise as a module from the first assignment
var caps = require("capitalise_js/capitalise.js");
var express_1 = __importDefault(require("express")); /*
class CapsServer {
    private header:any = {'Content-Type': 'text/plain'};

    constructor() {
        var server:http.Server = http.createServer(this.onRequest);
        server.listen(3000);
        console.log("Server starting..");
    }

    private onRequest(request:http.IncomingMessage, response:http.ServerResponse):void {
        response.writeHead(200, this.header);
        request.on('data',(message)=>{response.write()})
        response.end("Hello TypeScript & node.js");
    }
}

var server = new CapsServer();*/
var server = express_1.default();
var port = 3000;
// define a route handler for the default home page
server.post("/", function (req, res) {
    var body = "";
    req.on("data", function (dat) { body += dat; });
    req.on("end", function () { res.send(caps.CapsFirst(body)); });
});
// start the Express server
server.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
