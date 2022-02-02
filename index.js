const express = require('express');
const app = express();
const port = 8000;
const path = require('./routes')
app.use('/', path);

app.listen(port,function(err){
    if(err){
        console.log(`Eroor in server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})