const express = require('express')
const app = express();

// app.get("/about",  (req, res) => {
//     res.send({ version: "0.1" });
// })


app.get("/2._Data_Server", (req, res) => {
    res.send({ serverNr: 2 })
});




app.listen(8080);