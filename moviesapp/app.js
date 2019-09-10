var express = require('express');
//Express Object
var app = express();
var port = 7800;

app.get('/', function(req,res){
    res.send('This is home page')
});

app.get('/about', function(req,res){
    res.send('This is About page')
});

app.get('/contact', function(req,res){
    res.send('This is Contact page')
});
app.listen(port, function(err){
    if(err) throw err;
    console.log('Server is running on port '+port)
});