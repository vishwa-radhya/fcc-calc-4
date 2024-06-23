import Key from "./key";

const Operators=()=>{
    return(
        <div className="operators-container">
            <div className="upper-div">
                <Key innerText='C' id='clear' />
                <Key innerText='÷' id='divide' />
                <Key innerText='×' id='multiply' />
                <Key innerText='⇐'/>
                <Key innerText='7' id='seven' />
                <Key innerText='8' id='eight' />
                <Key innerText='9' id='nine' />
                <Key innerText='-' id='subtract' />
                <Key innerText='4' id='four' />
                <Key innerText='5' id='five' />
                <Key innerText='6' id='six' />
                <Key innerText='+' id='add' />
            </div>
            <div className="lower-div">
                <div className="big-lower">
                    <Key innerText='1' id='one' />
                    <Key innerText='2' id='two' />
                    <Key innerText='3' id='three' />
                    <Key innerText='%'  />
                    <Key innerText='0' id='zero'/>
                    <Key innerText='.' id='decimal' />
                </div>
                <div className="small-lower">
                    <Key innerText='=' id='equals'/>
                </div>
            </div>
        </div>
    )
}
export default Operators;