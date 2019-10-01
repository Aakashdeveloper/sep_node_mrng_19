const app = require('./app');
const express = require('express');
const port = process.env.port || 7800;
const session = require('express-session');

app.use(session({secret:'nareshit'}));

app.listen(port,() => {
    console.log(`Running on port ${port}`)
})
