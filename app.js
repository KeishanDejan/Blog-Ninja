const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listening to requests
app.listen(3000, () => {
    console.log("Server has started...");
})

// response for "/"
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds egg', snippet: 'Lorem ipsum dolar sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolar sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolar sit amet consectetur'}
    ]
    // res.send('<h1>Hello Ninjas</h1>');
    // res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', { title: 'Home', blogs });
    console.log(req.url);
});

// response for '/about'
app.get('/about', (req, res) => {
    // res.send('<h1>about Ninjas</h1>');
    res.render('about', { title: 'About' })
    console.log(req.url);
});

// redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// response for '/blog/create'
app.get('/blogs/create', (req,res) => {
    res.render('create.ejs', { title: 'Create a new blog' })
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
    console.log(req.url);
})