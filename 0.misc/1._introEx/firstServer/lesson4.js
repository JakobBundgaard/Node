const express = require('express')
const app = express();

app.get("/about", function (req, res) {
    res.send({ version: "0.1" });
})

app.listen(8080);