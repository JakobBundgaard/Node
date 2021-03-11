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

app.put("/bands/albums/:id", (req, res) => {
    const album = albums.find(a => a.id === parseInt(req.params.id));
    if (!album) return res.status(404).send("The album with given id was not found");

    album.title = req.body.title;
    res.send(album);
});

app.delete("/bands/albums/:id", (req, res) => {
    const album = albums.find(a => a.id === parseInt(req.params.id));
    if (!album) return res.status(404).send("The album with given id was not found");

    const index = albums.indexOf(album);
    albums.splice(index, 1);

    res.send(album);
});

const port = 8080;
app.listen(port, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Connection established on port ${port}`);
    }

});