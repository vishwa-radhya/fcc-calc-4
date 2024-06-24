import { useContext, useEffect, useState } from "react";
import { InputContext } from "./input-context";
import PropTypes from 'prop-types';
const Key=({innerText})=>{

    const {inputTextSetter}=useContext(InputContext);
    const [isFocused,setIsFocused]=useState(false);
    useEffect(()=>{
        function handleKeyBoardPress(event){
            const key=event.key;
            let btnContent=key;
            if(key==='Backspace' || key==='Delete'){
                btnContent='⇐';
            }else if(key === '*'){
                btnContent='×';
            }else if(key ==='/'){
                btnContent='÷';
            }
            if(key==='Enter'){
                btnContent='=';
            }
            if(btnContent === innerText){
                handleButtonClick(innerText);
            }
            if(key===innerText.toLowerCase() || key.toLowerCase() === innerText){
                handleButtonClick(innerText);
            }
            
        }

        document.addEventListener('keydown',handleKeyBoardPress);

        return ()=>{
            document.removeEventListener('keydown',handleKeyBoardPress);
        }

    });

    function handleBlur(){
        setIsFocused(false);
    }
    function handleButtonClick(innerText){

        
        setIsFocused(true);
        inputTextSetter(innerText);
        setTimeout(()=>{
            setIsFocused(false);
        },170);
    }

    const focusStyles={
        boxShadow:'inset -3px -3px 10px 3px rgba(255, 255, 255, 0.527),inset  3px 3px 10px 3px rgba(46, 144, 153, 0.414)',
    }

    return(
        <button onClick={(e)=>handleButtonClick(e.target.innerText,false)} onBlur={handleBlur} style={isFocused ? focusStyles:{}}>{innerText}</button>
    )
}
Key.propTypes={
    innerText:PropTypes.string,
}
export default Key;