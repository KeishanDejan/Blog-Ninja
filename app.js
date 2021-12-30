const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blogs')

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://KeishanDejan:Maybe_better@nodetuts.yls5e.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000, () => {
        console.log('Connected to Database...');
        console.log("Server has started...");
    }))
    .catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs');

// middlewares and static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true,}))
app.use(morgan('dev'));


// response for "/"
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/blogs', (req,res) => {
    Blog.find().sort({ createdAt : -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err)
        })
})

app.post('/blogs', (req,res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        })
    console.log(req.body)
})

// response for '/about'
app.get('/about', (req, res) => {
    // res.send('<h1>about Ninjas</h1>');
    res.render('about', { title: 'About' })
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
})