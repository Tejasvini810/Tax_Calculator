import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
const url = 'http://localhost:5000/postBody';
const url1 = 'http://localhost:5000/hello';

function Front (){
    


    const incomeRef = useRef();
    const [income, setIncome] = useState(0);
    const[tax, setTax] = useState(0);
  
    useEffect(() =>{
      fetch(url1,{
        method:"GET",
        })
      .then(response=>{
        console.log(response)
        return response.json();
      })
      .then(data=>{
        console.log(data)
        
      })
      .catch(error =>{
        console.error('Error:', error);
      });
      return () => {
        console.log("unload")
      }
    }, [tax]);

    const handleSubmit = () => {
        console.log(incomeRef.current.value);

        fetch(url,{
          method:"POST",
          body:JSON.stringify({"income":incomeRef.current.value}),
          headers: {
            "content-type": "application/json"
          }
        })
        .then(response=>{
          console.log(response)
          return response.json();
        })
        .then(data=>{
          console.log(data)
          setTax(data.tax);
        })
        .catch(error =>{
          console.error('Error:', error);
        });
        setIncome(incomeRef.current.value);
    };
    
    return (
        <div>
             <h1>TAX CALCULATOR</h1>
             <input type = "number" ref={incomeRef}/>
             
             <button 
             onClick={handleSubmit}>
                Submit

             </button>
             <div>
                <h2>Value:{income}</h2>
             </div>
             <div>
              <h2>Tax: {tax}</h2>
             </div>

             
             </div>
    
   );

}

export default Front;

/*
const { error } = require('console')
const express = require('express')
const cors = require("cors");
const req = require('express/lib/request');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 5000

app.get('/hello', (res,req)=>){
  res.send("")
}

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})

app.use(
  cors({
    origin: "http://localhost:3000",
  })
)

app.post('/postBody', (req, res) => {

  const income = req.body.income;
  function calculateIncomeTax(income) {
    let tax = 0;
    console.log(income)
    console.log(typeof income)
    if (income <= 300000
      
      ) {
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

*/