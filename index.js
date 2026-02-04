const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>ABES Engineering College</h1>
            <img src="https://content.jdmagicbox.com/v2/comp/ghaziabad/v2/011pxx11.xx11.101208104501.v3v2/catalogue/abes-engineering-college-rakesh-marg-nehru-nagar-ghaziabad-engineering-institutes-4748cnv.jpg  " width="300"/>
        `);
    }

    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("we are student");
    }

    else if (req.url === "/class") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("CE");
    }

    else if (req.url === "/image") {
        fs.readFile("./images/abes.jpg", (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Image not found");
            } else {
                res.writeHead(200, { "Content-Type": "image/jpeg" });
                res.end(data);
            }
        });
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 page not found");
    }

});

myserver.listen(8000, () => {
    console.log("server is run");
});