const express = require("express");
const app = express();

const port = process.env.PORT || 8080;


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

let id = plants.length;

app.get("/plants", (req, res) => {
    res.send({ "These plants will eat you!": plants });
});

app.get("/plants/:id", (req, res) => {
    let plant = plants.find(plant => plant.id === parseInt(req.params.id));

    res.send(plant);
});

app.post("/plants", (req, res) => {
    const newPlant = req.body;
    newPlant.id = id++;
    plants.push(newPlant);
    res.send({ data: newPlant })
});

app.delete("/plants/:id", (req, res) => {
    plants = plants.filter(plant => plant.id !== Number(req.params.id));
    res.send({});
})

app.patch("/plants/:id", (req, res) => {
    let plantUpdated = false;
    plants = plants.map(plant => {
        if (plant.id === Number(req.params.id)) {
            plantUpdated = true;
            return { ...plant, ...req.body, id: plant.id };
        }
        return plant;
    });
    res.send({ data: plantUpdated })
})

app.listen(port, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`Connection established on port ${port}`);
});
