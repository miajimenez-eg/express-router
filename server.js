const express = require("express")
const app = express()
const port = 3000
const user = require('./routers/userRouter')
const fruit = require('./routers/fruitRouter')

app.use(express.json());


// Express Routes
app.use('/user', user);
app.use('/fruit', fruit);


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
