const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("./models/post");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose
.connect(
"mongodb+srv://barcelos:barcelos@cluster0.x50me.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
console.log("connected do db");
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
app.post("/api/posts", (req, res, next) =>
console.log(req.body);
res.status(201).json({
message: "Post added",
});
});
app.get('/api/posts', (req, res, next) => {
const posts = [
{
id: '23hr23r8',
title: 'First server-side post',
content: 'This is coming from the server'
},
{
id: 'fd7yfdyf',
title: 'Second server-side post',
content: 'This is also coming from the server'
}
];
res.status(200).json({
message: 'Post sent with success!',
posts: posts
});
});