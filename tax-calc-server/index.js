const { error } = require('console')
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true }));
const port = 5000


//Express.js

app.get('/getHello', function(req, res) {
console.log(req.query);
res.send(req.query);  
//console.log(req.query.hello);
})




app.get('/setHello/:id',(req,res)=>{
  console.log(req.params)
  res.send("Value is: "+req.params.id);
})

 

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})

app.post('/postBody',(req,res)=>{
  console.log(req.body);
  res.send(req.body);
})