
const express=require('express');
const serveStatic=require('serve-static');

//var hostname= "localhost"
var hostname="18.210.149.51";
var port=3001;


var app=express();

//ssl cert
const fs = require('fs');
const https = require('https');
const sslServer = https.createServer({
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')

}, app)


app.use(function(req,res,next){
    console.log(req.url);
    console.log(req.method);
    console.log(req.path);
    console.log(req.query.id);
    //Checking the incoming request type from the client
    if(req.method!="GET"){
        res.type('.html');
        var msg='<html><body>This server only serves web pages with GET request</body></html>';
        res.end(msg);
    }else{
        next();
    }
});


app.use(serveStatic(__dirname+"/public"));


app.get("/", (req, res) => {
    res.sendFile("/public/home.html", { root: __dirname });
});


// app.listen(port,hostname,function(){

//     console.log(`Server hosted at http://${hostname}:${port}`);
// });

sslServer.listen(port, () => console.log(`Server hosted at https://${hostname}:${port}`))
