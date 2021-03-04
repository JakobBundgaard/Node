const express = require('express');

const cat = require("./cat.json");

const app = express();

app.use(express.json());

console.log(cat)

app.get("/cat", (req, res) => {
    res.send({ cat });
})


app.get("/querystring", (req, res) => {
    console.log(req.query);
    res.send({ query: req.query });
});

app.get("/pathvariable/:message/:title/:author", (req, res) => {
    res.send({
        message: req.params.message,
        title: req.params.title,
        author: req.params.author
    });
})



app.post("/whatever", (req, res) => {
    console.log()
    res.send({ body: req.body });
})

app.listen(8080);