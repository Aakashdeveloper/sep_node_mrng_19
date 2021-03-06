import express from 'express';
import axios from 'axios';
import redis from 'redis';
const port = 7600;
const app = express()
const client = redis.createClient({
    host:'localhost',
    port: 6379});

client.on('error',(err) => {
    console.log(err)
})


app.get('/data',(req,res) => {
    const userinput = (req.query.country).trim()
    const url = `https://en.m.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userinput}`

    return client.get(`wiki:${userinput}`,(err,result) => {
        if(result){
            const output = JSON.parse(result);
            return res.status(200).json(output)
        }else{
            return axios.get(url)
                .then(response => {
                    const output = response.data
                    client.setex(`wiki:${userinput}`,3600,JSON.stringify({source:'Redis cache',...output}))
                    return res.status(200).json({source:'API...', ...output})
                })
                .catch(err => {
                    return res.send(err)
                })
        }
    })
})



app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})
