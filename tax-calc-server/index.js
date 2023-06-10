const { error } = require('console')
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 5000


//Express.js

app.get('/getHello', function (req, res) {
  console.log(req.query);
  res.send(req.query);
  //console.log(req.query.hello);
})




app.get('/setHello/:id', (req, res) => {
  console.log(req.params)
  res.send("Value is: " + req.params.id);
})



app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})


app.post('/postBody', (req, res) => {

  const income = req.body.income;

  function calculateIncomeTax(income) {
    let tax = 0;

    if (income <= 30000) {
      tax = 0;
    } else if (income > 300000 && income <= 600000) {
      tax = ((income - 300000) * 5.0) / 100;
    } else if (income > 600000 && income <= 900000) {
      tax = 15000 + ((income - 600000) * 10.0) / 100;
    } else if (income > 900000 && income <= 1200000) {
      tax = 45000 + ((income - 900000) * 15.0) / 100;
    } else if (income > 1200000 && income <= 1500000) {
      tax = 90000 + ((income - 1200000) * 20.0) / 100;
    } else {
      tax = 150000 + ((income - 1500000) * 30.0) / 100;
    }
    return tax;
  }
  // Tax Calculation.
  const tax = calculateIncomeTax(income);


  console.log(tax);
  res.send({ "tax": tax })

})