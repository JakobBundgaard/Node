const express = require("express");
const app = express();

app.use(express.json());

let plants = [
    {
        id: 1,
        name: "Extremely dangerous plant"
    },
    {
        id: 2,
        name: "This one will bite your toes of"
    },
    {
        id: 3,
        name: "I like chicken"
    },
]

app.get("/plants", (req, res) => {
    res.send({ "These plants will eat you!": plants });
});

app.get("/plants/:id", (req, res) => {
    let plant = plants.find(plant => plant.id === parseInt(req.params.id));
    if (!plants) return res.status(404).send("The plant with given id was not found");

    res.send(plant);
});

app.post("/plants", (req, res) => {
    const plant = {
        id: plants.length + 1,
        name: req.body.name
    }
    plants.push(plant);
    res.send({ body: req.body })
});

const port = 8080;
app.listen(port, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`Connection established on port ${port}`);
});
