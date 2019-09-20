var express = require('express');
var app = express();
var port = process.env.port || 3500;
var request = require('request');

const ApiUrl =  'http://api.openweathermap.org/data/2.5/forecast/daily?q=Boston&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29'

app.use(express.static(__dirname+'/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/health', function(req,res){
    res.send('App is Running')
})

app.get('/weather', function(req,res){
    request(ApiUrl, function(err,response,body){
        if(err){
            res.status(404).send('Error in APi Call')
        }else{
            var out = JSON.parse(body)
            //res.status(200).send(out)
            res.status(200).render('weatherView',{
                title:'Weather App',
                result:out
            })
        }
    })
})

app.listen(port, function(err){
    if(err) throw err;
    console.log('App is running on port '+port)
})