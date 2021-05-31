const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('hello word');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/view/about.html')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
})

const PORT = 5000;
app.listen(process.PORT || PORT);
console.log("running port: " + PORT);