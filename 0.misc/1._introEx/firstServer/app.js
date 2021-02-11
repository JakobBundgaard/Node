const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//     res.send({ message: "This is my response" })
// });


// app.get("/newOne/id", (req, res) => {
//     const id = 1;
//     res.send({ "something": "you can do" })
// })


// To solve the assigment create a datatype to store the data in 
// Implement the two endpoints.. 

const student = [
    {
        name: "Jake",
        id: 2
    },
    {
        name: "Shawn",
        id: 3
    }
];

app.get("/students", (req, res) => {
    res.send({ "Students": student })
});


app.get("/students/id", (req, res) => {

    res.send({ "student by id": student.name })
})

app.listen(8080);




