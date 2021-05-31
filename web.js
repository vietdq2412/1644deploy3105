const express = require('express');
const app = express();


app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/view/about.html')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
})

app.get('/account', (req, res) => {
    res.end('hello word');
})

app.get('/contact', (req, res) => {
    res.end('hello word');
})

const PORT = 5000;
app.listen(process.env.PORT || PORT);
console.log("running");