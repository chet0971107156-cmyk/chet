const express = require('express')
const cors = require("cors")
const app = express()
const Port = 3000
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    nickname: "Hello, I'm Chet",
    programming: "Programming: Python, C++, C#",
    games: "Gaming: ROV, Battlefield6, Wuthering Waves"
  })
})

app.listen(Port, () => {
  console.log("Server starts successfully")
})