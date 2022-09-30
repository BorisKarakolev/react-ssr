const express = require("express");
const bodyParser = require("body-parser");

const PORT = 4200
const USERS = require('./users.json')

const app = express()
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('OK')
})

app.get("/users", (req, res) => {
  try {
    res.status(200).json(USERS.users);
  } catch (err) {
    res.status(400).json({ message: "Can't find your links" });
  }
});

app.listen(PORT, () => {
  console.log(`Listen on ${PORT}`);
});