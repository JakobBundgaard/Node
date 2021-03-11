const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/index.html")
});

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + "/public/dragons.html")
});

app.get("/safeport", (req, res) => {
    res.send({ message: "You are safe here" });
});

app.get("/dangerport", (req, res) => {
    res.redirect("/safeport");
})

console.log(process.env.PORT);



app.listen(port, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Connection established on port ${port}`);
    }

});