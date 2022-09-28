const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('OK')
})

app.listen(4200);