import { createContext } from "react";
import { useState } from "react"
import PropTypes from 'prop-types';

export const InputContext = createContext();

export const InputProvider =({children})=>{

    const [inputText,setInputText]=useState('0');

    function calculateValue(val){
        let query=val;
        query=query.replace(/[×]/g,'*');
        query=query.replace(/[÷]/g,'/');
        try{
        return eval(query);
        }catch(e){
            console.log(e);
            return val;
        }
    }

    function doublDecimalCheck(val){
        let hasDecimal = false; // Flag to track if a decimal has been encountered

        // Iterate through each character in the input string
        for (let i = 0; i < val.length; i++) {
          const char = val[i];
      
          // Check for operators
          if (char.match(/([+-×÷%])/)) {
            hasDecimal = false; // Reset decimal flag after an operator
          } else if (char === '.') {
            // Enforce single decimal per number
            if (hasDecimal) {
              val = val.slice(0, i) + val.slice(i + 1); // Remove the duplicate decimal
            } else {
              hasDecimal = true;
            }
          }
        }
      
        return val;

    }
    

    function calcFunctionalityHandler(newText){
        
        let val;
        const operatorArray=['+','-','×','÷','%','.'];
        if(newText==='⇐'){

            val = inputText.slice(0,inputText.length-1);

        } 

        else{

        val = inputText+newText;

            if(operatorArray.includes(val[val.length-1]) && operatorArray.includes(val[val.length-2])){

                val=val.slice(0,inputText.length);
   
            }

        }

        if(val[0]==='0' ||val[0]==='+' || val[0]==='-' || val[0]==='×' || val[0]==='÷' || val[0]==='%'){

            val=val.slice(1);

            if(val[0]==='+' || val[0]==='-' || val[0]==='×' || val[0]==='÷' || val[0]==='%'){

                val=val.slice(1);

            }

        }

        if(newText==='C'){ 

            val='0';

        }

        if(val==='.'){
            val=' 0.';
        }

        val=doublDecimalCheck(val);       

        if(newText==='='){
            val=calculateValue(inputText);
        }

        return val;
    }

    function inputTextSetter(newText){
        const val = calcFunctionalityHandler(newText);
        setInputText(val);
    }

    return(
        <InputContext.Provider value={{inputText,inputTextSetter}}>
            {children}
        </InputContext.Provider>
    )
}
InputProvider.propTypes={
    children:PropTypes.node,
}