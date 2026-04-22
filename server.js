const express = require('express')
const app = express()
const port = 5000
app.use(express.json());

app.get('/', (req, res) => {
  res.send('this is my first server')
})
app.get('/contact', (req, res) => {
  res.send('this is my contact page')
})

app.post('/data', (req, res) => {
    const data=req.body;
    console.log('received data:',data);
    if(!data){
  return res.status(400).send('no data received')
}})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
