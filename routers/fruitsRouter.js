const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");
const app = express();

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

// routes
router.get('/', (req, res) => {
    res.json(fruits);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const getFruit = fruits[id - 1];
    res.json(getFruit);
})

// POST fruits route
router.post("/", [check("color").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
        fruits.push(req.body);
        res.json("Post Success!");
    }
  });
// app.use(express.json())
// router.post('/', [check("color").not().isEmpty().trim()], (req, res) => {
//     // let newFruit = {name: "Mango", color: "Green"};
//     // newFruit = req.body;
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         res.json({error: errors.array()});
//     } else {
//         fruits.push(req.body);
//         res.json(fruits);
//     }
// })

// PUT fruits route
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    fruits[index].name = "Pomegranate";
    fruits[index].color = "Red";
    res.json(fruits);
})

// DELETE fruits route
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    fruits.splice(index, 1);
    res.json(fruits);
})

module.exports = router;