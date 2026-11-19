const express = require('express')
const cors = require("cors")
const app = express()
const Port = 3000

app.use(cors())

app.get('/',(req, res) =>{
  let w = Number(req.query.w)
  let h = Number(req.query.h)

  if (!isFinite(w)||!isFinite(h)) {
    return res.status(400).json({ error:'กรอกเป็นตัวเลขเท่านั้น'})
  }
  if (w <= 0 || h <= 0) {
    return res.status(400).json({ error:'ห้ามกรอกเลข 0 และเลขติดลบ'})
  }
  
  let b = w / (h/100)**2
  let r = ''
  if (b < 18.5) {
    r = 'Underweight'
  } else if (b < 25) {
    r = 'Normal weight'
  } else if (b < 30) {
    r = 'Overweight'
  } else  {
    r = 'Obese '
  }
  res.json({ bmi: b.toFixed(2), result: r })
})

app.listen(Port, () => {
  console.log("Server starts successfully")
})