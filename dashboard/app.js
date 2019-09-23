var express = require('express');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var MongoClient = mongo.MongoClient;
var app = express();
var port = process.env.PORT || 7600;
var db;
var mongourl = "mongodb://127.0.0.1:27017/";
var col_name = 'julynode'

// For fetching data from body
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('App is working')
})

app.get('/user',(req,res) => {
    db.collection(col_name).find().toArray((err,result) => {
        if(err){
            res.status(401).send('No data Found')
        }else{
            res.setHeader('Access-Control-Allow-Origin','*')
            res.setHeader('Access-Control-Allow_headers','Origin,X-Request-With,Content-Type,Accept')
            res.status(200).send(result)
        }
    })
})

app.post('/addUser',(req,res) => {
    db.collection(col_name).insertOne(req.body,(
        err,result)=>{
            if(err){
                res.status(401).send('No data Found')
            }else{
                res.status(200).send('Data Added SuccessFully')
            }
        }
    )
})

MongoClient.connect(mongourl,(err,client) => {
    if(err) throw err;
    db = client.db('classpractice');
    app.listen(port,(err) => {
        console.log(`Server is running on port ${port}`)
    })
})