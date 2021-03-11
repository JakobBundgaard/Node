const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/index.html")
});

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + "/public/dragons.html")
});





const port = 8080;
app.listen(port, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Connection established on port ${port}`);
    }

});