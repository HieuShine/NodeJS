const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Method GET')
})
app.post('/',(req,res)=>{
res.send('Methob POST')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})