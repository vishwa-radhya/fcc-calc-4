import { useContext } from "react";
import { InputContext } from "./input-context";

const Display=()=>{

    const {inputText,solutionText}=useContext(InputContext);
   

    return(
        <div className="display-container" >
            <input type="text" readOnly className="input-query" value={solutionText} />
            <input type="text"  readOnly className="input-solution" value={inputText} id="display"  />
        </div>
    )
    
}
export default Display;