const express = require("express");
const app = express();

app.use(express.json());

const albums = [
    {
        id: 1,
        title: "Exercises In Futility"
    },
    {
        id: 2,
        title: "Death Atlas"
    },
    {
        id: 3,
        title: "Kaj & Andrea"
    },
];

app.get("/bands/albums/", (req, res) => {
    res.send({ "Albums": albums });
});

app.post("/bands/albums/", (req, res) => {
    const album = {
        id: albums.length + 1,
        title: req.body.title
    }
    albums.push(album);
    res.send({ body: req.body })
});

app.listen(8080);