const express = require('express');
const mongoose = require("mongoose");
const Post = require("../models/post");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
    });
//Connect to DB 
mongoose
.connect(
"mongodb+srv://barcelos:barcelos@cluster0.x50me.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
console.log("connected do db");
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
})
.catch(() => {
console.log("Connection failed");
});


  
  

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
    });

//Adding Post to DB



app.post("/api/posts", (req, res, next) =>{

    const post = new Post({
    title: req.body.title,
    content: req.body.content,
    });
    console.log("ADD" + post);
    post.save();
    res.status(201).json({
    message: "Post added",
});
});
//Fetching from DB
app.get('/api/posts', (req, res, next) => {
    Post.find()
    .then((documents) => {
    res.status(200).json({
    message: "Post sent with success!",
    posts: documents,
    });
    })
    .catch(() => {
    res.status(201).json({
    message: "There was an error fetching posts",
    });
    });
    });




module.exports = app;