var fs = require('fs');

/*fs.readFile('mytext.txt','utf-8', function(err,data){
    if(err) throw err;
    console.log(data)
})*/
fs.writeFile('mytext1.txt','Hi To FS1', function(err,data){
    if(err) throw err;
    console.log('Data created success')
})

fs.rename('mytext1.txt', 'mytext2.json', function(err){
    if(err) throw err;
    console.log('File Renamed')

})

fs.unlink('mytext.txt', function(err){
    if(err) throw err;
    console.log('File deleted')

})
/*fs.appendFile('mytext.txt','Hi To FS1>>>>>>>\n', function(err,data){
    if(err) throw err;
    console.log('Data created success')
});*/
