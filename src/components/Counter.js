import { useState } from "react";
import "./Counter.css";

const Counter = ({ initial = 1, max = 1000 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < max) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const handleInput = (e) => {
        e.preventDefault();
        let val = parseInt(e.target.value);
        if( !isNaN(val) && val < max){
            setCount(val)
        } else if(e.target.value === "") {
            setCount(initial);
        }

    }

    return (
        <div className="counter-wrapper">
            <button className="counter-btn" onClick={decrement}>-</button>
            <input type="text" onChange={handleInput} value={count} className="counter-count"/>
            <button disabled={count === max} className="counter-btn" onClick={increment}>+</button>
        </div>
    );
}

export default Counter;
