import { createContext } from "react";
import { useState } from "react"
import PropTypes from 'prop-types';

export const InputContext = createContext();

export const InputProvider =({children})=>{

    const [inputText,setInputText]=useState('0');
    const [solutionText,setSolutionText]=useState('');

    function reduceOutput(evaluatedValue){
        if(/[.]/.test(evaluatedValue)){
            let rtnValue = evaluatedValue.split('.');
            if(rtnValue[1].length>3){
                let val = rtnValue[0]+'.'+rtnValue[1].slice(0,3);
                return val;
            }
        }
        return evaluatedValue;
    }

    function calculateValue(val){
        let query=val;
        query=query.replace(/[×]/g,'*');
        query=query.replace(/[÷]/g,'/');
        try{
        let evaluatedValue= eval(query);
        if(evaluatedValue.toString().length>14){
            let evalVal =evaluatedValue.toString();
            evaluatedValue=reduceOutput(evalVal);
        }
        setSolutionText(val+'='+evaluatedValue);
        return evaluatedValue;
        }catch(e){
            console.log(e);
            return val;
        }
    }

    function doublDecimalCheck(val){
        let len = val.length-1;
        let count=0;
        while(!['+','-','×','÷','%'].includes(val[len]) && val[len]){
            if(val[len]==='.'){
                count+=1;
            }
            len-=1;
        }
        if(count>1){
            return val.slice(0,val.length-1);
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
            setSolutionText('');

        }

        if(val==='.'){
            val=' 0.';
        }

        if(newText==='.'){
            val=doublDecimalCheck(val);       
        }

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
        <InputContext.Provider value={{inputText,inputTextSetter,solutionText}}>
            {children}
        </InputContext.Provider>
    )
}
InputProvider.propTypes={
    children:PropTypes.node,
}