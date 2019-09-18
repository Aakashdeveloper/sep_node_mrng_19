var express = require('express');
var productRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017"

function router(menu){
  productRouter.route('/')
    .get(function(req,res){
      mongodb.connect(url,function(err,db){
        if(err){
          res.status(401).send('error while connecting...')
        }else{
          const dbo = db.db('classdatabase');
          dbo.collection('products').find({}).toArray(
            function(err,data){
              if(err){
                res.status(401).send('No Data...')
              }else{
                res.status(200).render('products',
                  {title:'product',
                    product: data,
                menu})
              }}
          )}
      })
  });

  productRouter.route('/details/:myid')
    .get(function(req,res){
      var {myid} = req.params
      console.log(">>>>>",myid)
      mongodb.connect(url,function(err,db){
        if(err){
          res.status(401).send('error while connecting...')
        }else{
          const dbo = db.db('classdatabase');
          dbo.collection('products').findOne({_id:myid},function(err,data){
            if(err){
              res.status(401).send('No Data...')
            }else{
              console.log("<<<<<",data)
              res.status(200).render('productDetails',
              {title:'Product Details',
               product: data,
               menu
              })
            }
          })
        }
      })
    });
  return productRouter
}

module.exports = router;

//res.render('productDetails',{title:'Product Details',product: product,menu})