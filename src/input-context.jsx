import { createContext } from "react";
import { useState } from "react"
import PropTypes from 'prop-types';

export const InputContext = createContext();

export const InputProvider =({children})=>{

    const [inputText,setInputText]=useState('0');

    

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