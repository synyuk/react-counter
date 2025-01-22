import "./Counter.css"
import {useState} from "react";
//const val = ["asdads",2,3,4,5,6,7,8,9];

function Counter(props) {
    const [count, setCounter] = useState(0);

    function IncremetCounter() {
        setCounter(count + 1);
    }
    function DecrementCounter() {
        setCounter(count - 1);
    }

    function resetCounter() {
        setCounter(0);
    }

    return (
        <>
            <div className="counter-wrapper">
                <button onClick={DecrementCounter}>-</button>
                <div className="counter">{count}</div>
                <button onClick={IncremetCounter}>+</button>
                <button className="buttonReset" onClick={resetCounter}>reset</button>
            </div>
            {/*{val.map((value, index) => (*/}
            {/*    <div className="counter" key={index}>*/}
            {/*        {value} {props.value} {props.name}*/}
            {/*    </div>*/}
            {/*))}*/}
        </>
    )
}

export default Counter;