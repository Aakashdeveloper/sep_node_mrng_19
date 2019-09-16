var express = require('express');
//Express Object
var app = express();
var port = 7800;


app.use(express.static(__dirname+'/public'))
app.set('views', './src/views');
app.set('view engine', 'ejs');

var menu = [
    {name:'Home', link:'/'},
    {name:'Product', link:'/product'},
    {name:'Movies', link:'/movies'}
]

var moviesRouter = require('./src/routes/moviesRoute')(menu);
var productRouter = require('./src/routes/productRoute')(menu);

app.use('/movies',moviesRouter )
app.use('/product',productRouter)


app.get('/', function(req,res){
    res.render('index',{title:'Home Page', menu})
});

app.listen(port, function(err){
    if(err) throw err;
    console.log('Server is running on port '+port)
});