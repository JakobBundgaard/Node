const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;

app.get("/index", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/week1", (req, res) => {
    res.sendFile(__dirname + "/public/week1.html")
});

app.get("/week2", (req, res) => {
    res.sendFile(__dirname + "/public/week2.html")
});

app.get("/week3", (req, res) => {
    res.sendFile(__dirname + "/public/week3.html")
});

app.get("/week4", (req, res) => {
    res.sendFile(__dirname + "/public/week4.html")
});

app.get("/week5", (req, res) => {
    res.sendFile(__dirname + "/public/week5.html")
});



app.listen(port, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Connection established on port ${port}`);
    }
});
