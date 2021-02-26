const express = require("express");
const app = express();

const students = [
    {
        name: "Jake",
        id: 2
    },
    {
        name: "Shawn",
        id: 3
    }
];

app.get("/students", (req, res) => {
    res.send({ "Students": students })
});

const classes = [
    {
        name: "Node.js",
        teacher: "Anders Latif"
    },
    {
        name: "Python",
        teacher: "Claus Boven"
    }
];

app.get("/students/classes", (req, res) => {
    res.send({ "Classes": classes })
})

app.listen(8080);