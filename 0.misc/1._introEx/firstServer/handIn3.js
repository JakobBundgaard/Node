const express = require("express");
const app = express();



let dateObj = new Date();


console.log(dateObj)

app.get("/time", (req, res) => {
    res.send("The time is: " + dateObj.toLocaleTimeString());
})

app.get("/day", (req, res) => {
    res.send("The day is: " + dateObj.toDateString().slice(0, 3));
})

app.get("/month", (req, res) => {
    res.send("The month is: " + dateObj.toDateString().slice(3, 7));
})

app.listen(8080);
