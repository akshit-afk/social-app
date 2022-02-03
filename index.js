const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const path = require('./routes')
app.use(expressLayouts);
app.use('/', path);
app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views','./views');
app.set("layout extractStyles",true);
app.set("layout extractScripts",true);

app.listen(port,function(err){
    if(err){
        console.log(`Eroor in server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})