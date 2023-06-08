import React, { useState, useRef } from 'react';


/*function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };
  }


function Form(){
    const validations = {
        numeric: {
            rule: () => /^\d+$/,
            formatter(fieldName) {
              return `${fieldName} should contain only numbers.`;
            }
          },

}
};

*/




function Front (){
    

    const incomeRef = useRef();
    const [income, setIncome] = useState(0);
    
    const valueInput = () => {
        incomeRef.current.value();
    };    

    


   
  
  
    const handleSubmit = () => {
        console.log(incomeRef.current.value);
        setIncome(incomeRef.current.value);
       console.log('value is:', incomeRef.current.value);
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

             
             </div>
             
         

             
    
   );

}

export default Front;

