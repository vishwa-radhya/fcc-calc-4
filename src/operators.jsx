import Key from "./key";

const Operators=()=>{
    return(
        <div className="operators-container">
            <div className="upper-div">
                <Key innerText='C'/>
                <Key innerText='÷'/>
                <Key innerText='×'/>
                <Key innerText='⇐'/>
                <Key innerText='7'/>
                <Key innerText='8'/>
                <Key innerText='9'/>
                <Key innerText='-'/>
                <Key innerText='4'/>
                <Key innerText='5'/>
                <Key innerText='6'/>
                <Key innerText='+'/>
            </div>
            <div className="lower-div">
                <div className="big-lower">
                    <Key innerText='1'/>
                    <Key innerText='2'/>
                    <Key innerText='3'/>
                    <Key innerText='%'/>
                    <Key innerText='0'/>
                    <Key innerText='.'/>
                </div>
                <div className="small-lower">
                    <Key innerText='='/>
                </div>
            </div>
        </div>
    )
}
export default Operators;