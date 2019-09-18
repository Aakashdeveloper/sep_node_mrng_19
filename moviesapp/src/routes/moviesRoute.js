var express = require('express');
var moviesRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017"

function router(menu){

  moviesRouter.route('/')
      .get(function(req,res){
          mongodb.connect(url,function(err,db){
            if(err){
              res.status(401).send('error while connecting...')
            }else{
              const dbo = db.db('classdatabase');
              dbo.collection('movies').find({}).toArray(
                function(err,data){
                  if(err){
                    res.status(401).send('No Data...')
                  }else{
                    res.status(200).render('movies',{
                      title:'Movies Page',
                      movies: data, 
                      menu
                    })
                  }}
              )}
          })
      });
    

  moviesRouter.route('/details/:id')
    .get(function(req,res){
      //var id = req.params.id
      var {id} = req.params
      mongodb.connect(url, function(err,db){
        if(err){
          res.status(401).send('error while connecting...')
        }else{
          const dbo = db.db('classdatabase');
          dbo.collection('movies').findOne({_id:id},function(err,data){
            if(err){
              res.status(401).send('error while connecting...')
            }else{
              res.render('details',{
                title:'Movies Details',
                movies: data,
                menu})
            }
          })
        }
      })
     
  });

  return moviesRouter

}

module.exports = router;

//  res.render('details',{title:'Movies Details',movies: movies,menu})