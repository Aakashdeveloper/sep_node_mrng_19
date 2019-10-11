const express = require('express') ;
const database = require('./database')

const app = express();
const port = 6789;

app.get('/', (req, res) => {
  let out = database.prototype.getData('NewStudent')
  res.send(out)
});

app.post('/addData', (req,res) => {
    var mydata = {name:'testuser', class:'AI'}
    database.prototype.postData('NewStudent',mydata)
});



app.listen(port, (err) => {
    console.log(`Server is running on port ${port}`)
})