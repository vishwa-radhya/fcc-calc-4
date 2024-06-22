import Display from "./display";
import Operators from "./operators";

const Calculator=()=>{
    return(
        <div className="calc-container">
            <Display/>
            <Operators/>
        </div>
    )
}
export default Calculator;