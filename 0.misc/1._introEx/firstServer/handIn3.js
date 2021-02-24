const express = require("express");
const app = express();

app.get("/time", (req, res) => {
    app.send("Hello")
})