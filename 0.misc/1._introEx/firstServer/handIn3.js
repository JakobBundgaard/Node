const express = require("express");
const app = express();



let dateObj = new Date();


console.log(dateObj)

app.get("/time", (req, res) => {
    res.send("The time is: " + dateObj.toLocaleTimeString('dk-DK', { weekday: 'long' }));
});

app.get("/day", (req, res) => {
    res.send("The day is: " + dateObj.toDateString().slice(0, 3));
});

app.get("/month", (req, res) => {
    res.send("The month is: " + dateObj.toDateString().slice(3, 7));
});


// outsideof function, because otherwise the array would be inititalized everytime we run  
const weekdays = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"]

app.get("/days", (req, res) => {
    const todaysWeekday = new Date().getDay(); // needs to be inside functionotherwise the day wouldn't change
    res.send({ day: weekdays[todaysWeekday] });
});

app.listen(8080);
