const express = require('express');

// express app
const app = express();

// listening to requests
app.listen(3000, () => {
    console.log("Server has started...");
})

// response for "/"
app.get('/', (req,res) => {
    // res.send('<h1>Hello Ninjas</h1>');
    res.sendFile('./views/index.html', {root: __dirname});
    console.log(req.url);
});

// response for '/about'
app.get('/about', (req,res) => {
    // res.send('<h1>about Ninjas</h1>');
    res.sendFile('./views/about.html', {root: __dirname});
    console.log(req.url);
});

// redirect
app.get('/about-us', (req,res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})