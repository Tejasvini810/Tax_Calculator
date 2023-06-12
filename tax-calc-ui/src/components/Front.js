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

