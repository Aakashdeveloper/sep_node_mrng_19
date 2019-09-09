var http = require('http');
var os = require('os')
var fs = require('fs');

var server = http.createServer(function(req,res){
    fs.readFile('db.json','utf-8', function(err,data){
        if(err) throw err;
        res.write(data);
        res.end();
    })
    // res.write("<h1>Hi "+os.userInfo().username+ " you are using "+ os.platform() +" os of "+os.arch()+"bit arch </h1>")
});

server.listen(2300);
