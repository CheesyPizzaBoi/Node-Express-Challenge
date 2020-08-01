const express = require('express')

const app = express();

const port = 3000;

app.listen(port, function(){
    console.log('listening to port:', port);
});

app.get('/home', (req, res) => {
    res.sendFile("./home.html", { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile("./about.html", { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile("./contact.html", { root: __dirname });
});

app.get('/', function(req, res){
    res.sendStatus(401);
});


