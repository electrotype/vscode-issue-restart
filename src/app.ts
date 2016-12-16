
import { IncomingMessage, ServerResponse, createServer } from "http";

let server = createServer((request: IncomingMessage, response: ServerResponse) => {
    response.end("Date1 : " + new Date().toISOString());
});

server.listen(8080, function () {
    console.log("Started : http://localhost:8080");
});
