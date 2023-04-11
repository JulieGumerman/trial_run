const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 1999;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello from the other side")
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})