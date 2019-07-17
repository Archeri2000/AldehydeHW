

// NPM has been set up to import capitalise as a module from the first assignment
const caps = require("capitalise_js");

import Http = module('http');


class CapsServer {
    private header:Object = {'Content-Type': 'text/plain'};

    constructor() {
        var server:Http.Server = Http.createServer(this.onRequest);
        server.listen(3000);
        console.log("Server starting..");
    }

    private onRequest(request:Http.ServerRequest, response:Http.ServerResponse):void {
        response.writeHead(200, this.header);
        response.end("Hello TypeScript & node.js");
    }
}

var server = new CapsServer();