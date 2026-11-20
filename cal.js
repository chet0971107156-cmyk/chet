const express = require('express')
const cors = require("cors")
const app = express()
const Port = 3000
app.use(cors())

app.get('/plus', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) + parseFloat(b);
  res.json({ result });
});

app.get('/minus', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) - parseFloat(b);
  res.json({ result });
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) * parseFloat(b);
  res.json({ result });
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) / parseFloat(b);
  if (parseFloat(b) === 0) {
    res.json({ error: "ห้ามหาร 0" });
  }
  else {
    res.json({ result });
  }
});

app.listen(Port, () => {
  console.log("Server starts successfully")
})