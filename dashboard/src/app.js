import express from 'express';
import mongo from 'mongodb';
import bodyParser from 'body-parser';
const MongoClient = mongo.MongoClient;
const app = express();
const port = process.env.PORT || 7600;
let db;
const mongourl = "mongodb://127.0.0.1:27017/";
const col_name = 'julynode'

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

app.put('/updateUser',(req,res) => {
    db.collection(col_name).findOneAndUpdate({"name":req.body.name},{
        $set:{
            id:req.body.id,
            name:req.body.name,
            email:req.body.email
        }
    },{
        upsert:true
    },(err,result) => {
        if(err) throw err;
        res.send('Data Updated')
    })
})

app.delete('/deleteuser',(req,res) => {
    db.collection(col_name).findOneAndDelete({
        "name":req.body.name 
    },(err,result) => {
        if(err) throw errr;
        res.send('Data Deleted')
    })
})


MongoClient.connect(mongourl,(err,client) => {
    if(err) throw err;
    db = client.db('classpractice');
    app.listen(port,(err) => {
        console.log(`Server is running on port ${port}`)
    })
})