const express = require ('express')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
  res.send('Hello World')
});

app.get('/about',(req,res) =>{
  res.send(`<h1>Welcome</h1>`);
});

app.get('/services', (req, res) => {
  res.send("What services you expect ?");
});


app.get('/products', (req, res) => {
  res.send("This page is under construction");
});


app.listen(port,() =>{
  console.log(`Example app listening on port ${port}`)
})
