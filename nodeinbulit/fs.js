var fs = require('fs');

/*fs.readFile('mytext.txt','utf-8', function(err,data){
    if(err) throw err;
    console.log(data)
})
fs.writeFile('mytext.txt','Hi To FS1', function(err,data){
    if(err) throw err;
    console.log('Data created success')
})
*/
fs.appendFile('mytext.txt','Hi To FS1>>>>>>>\n', function(err,data){
    if(err) throw err;
    console.log('Data created success')
});
