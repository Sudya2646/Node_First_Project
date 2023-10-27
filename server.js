const express = require('express')
const app = express()
const mongoose = require("mongoose");
const port = 3100
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.use(jsonParser)
app.use(express.json())

app.use("/", require("./routes/contactRoutes"))
app.use("/user", require("./routes/userRoutes"))

app.listen(port, () => {
   console.log('This server runs at http://localhost:3100/ ')
})