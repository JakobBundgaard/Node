const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({ message: "This is my response" })
});


app.get("/newOne/id", (req, res) => {
    const id = 1;
    res.send({ "something": "you can do" })
})

app.listen(8080);


// To solve the assigment create a datatype to store the data in 
// Implement the two endpoints.. 

