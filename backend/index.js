const express = require("express");
const mainRouter = require("./routers/index.js");
const cors = require("cors");
const PORT = 3000;

const app = express();

app.use("/api/v1", mainRouter);
app.use(express.json());

app.listen(PORT, () => {
    console.log("Running on Port: 3000 !!!");
})



