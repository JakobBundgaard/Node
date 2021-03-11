const express = require("express");
const app = express(); // app is the initialized instance of server
// console.log(express());

app.get("/", (req, res) => {
    res.send({});
})

app.get("/welcome", (req, res) => {
    res.send("<h2>Welcome!</h2>");
});

app.get("/me", (req, res) => {
    res.send(jakob = {
        firstName: "Jakob",
        lastName: "Bundgaard",
        needs: "Food"
    });
})



app.listen(8080);