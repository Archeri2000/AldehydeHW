

// NPM has been set up to import capitalise as a module from the first assignment
const caps = require("capitalise_js/capitalise.js");
import * as http from "http";
import express from "express";/*
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

var server = express();
const port = 3000;

// define a route handler for the default home page
server.post( "/", ( req: express.Request, res: express.Response) => {
    let body = "";
    req.on("data", dat =>{body += dat});
    req.on("end", ()=>{res.send(caps.CapsFirst(body))});
} );

// start the Express server
server.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );