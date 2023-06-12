const { error } = require('console')
const express = require('express')
const cors = require("cors");
const req = require('express/lib/request');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 5000

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})

app.use(
  cors()
)


app.get('/hello', function (req, res) {
  res.send({"hello" : "world"});
})

app.post('/postBody', (req, res) => {

  const income = req.body.income;
  function calculateIncomeTax(income) {
    let tax = 0;
    console.log(income)
    console.log(typeof income)
    if (income <= 300000) {
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
  const tax = calculateIncomeTax(parseInt(income));

  console.log(tax);
  res.send({ "tax": tax });

})


