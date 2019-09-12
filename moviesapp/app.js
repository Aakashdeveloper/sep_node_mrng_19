var express = require('express');
//Express Object
var app = express();
var port = 7800;
var moviesRouter = express.Router();
var artistRouter = express.Router();

app.use(express.static(__dirname+'/public'))
app.set('views', './src/views');
app.set('view engine', 'ejs');

var menu = [
    {name:'Home', link:'/'},
    {name:'Artist', link:'/artist'},
    {name:'Movies', link:'/movies'}
]

app.use('/movies',moviesRouter )
app.use('/artist',artistRouter)


app.get('/', function(req,res){
    res.render('index',{title:'Home Page', menu})
});

app.listen(port, function(err){
    if(err) throw err;
    console.log('Server is running on port '+port)
});