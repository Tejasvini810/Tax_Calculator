import React, { useState, useRef } from 'react';
const url = 'http://localhost:5000/postBody';



function Front (){
    

    const incomeRef = useRef();
    const [income, setIncome] = useState(0);
    const[tax, setTax] = useState(0);
    
    const valueInput = () => {
        incomeRef.current.value();
    };    


    fetch(url,{
      method:'POST',
      body:JSON.stringify({income}),
    })
    .then(response=>response.send())
    .then(data=>{
      setTax(tax);
    })
    .catch(error =>{
      console.error('Error:', error);
    });
    

  
    const handleSubmit = () => {
        console.log(incomeRef.current.value);
        setIncome(tax);
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

