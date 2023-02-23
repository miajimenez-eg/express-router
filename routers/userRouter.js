const express = require("express");
const router = express.Router();

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

// routes
router.get('/', (req, res) => {
    res.json(users);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const findUser = users[id - 1];
    res.json(findUser);
})

// POST users route
router.post('/', (req, res) => {
    const newUser = {name: "User 5", age: 21}
    users.push(newUser);
    res.json(users);
})

// PUT users route
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    users[index].name = "User 6";
    users[index].age = 34;
    res.json(users);
})

// DELETE users route
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    users.splice(index, 1);
    res.json(users);
})


module.exports = router;