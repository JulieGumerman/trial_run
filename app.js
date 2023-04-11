const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 1999;

const dogsRouter = require("./router/dogsRouter");

app.use(cors());
app.use(express.json());

app.use("/dogs", dogsRouter);

app.get("/", (req, res) => {
    res.send("Hello from the other side")
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
