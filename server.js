const express = require("express")
const app = express()
const port = 3000
const user = require('./routers/usersRouter')
const fruit = require('./routers/fruitsRouter')

app.use(express.json());


// Express Routes

app.use(express.json());
app.use('/users', user);
app.use('/users/:id', user);
app.use('/fruits', fruit);
app.use('/fruits/:id', fruit);


app.use('/user', user);
app.use('/fruit', fruit);



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
