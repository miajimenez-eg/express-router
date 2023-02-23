const express = require("express")
const app = express()
const port = 3000
const user = require('./routers/userRouter')
const fruit = require('./routers/fruitRouter')

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

// Express Routes
app.use('/user', userRouter);
app.use('/user/:id', userRouter);
app.use('/fruit', fruitRouter);
app.use('/fruit/:id', fruitRouter);



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
