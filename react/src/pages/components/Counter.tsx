import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Counter() {
    const [counterOne, setCounterOne] = useState(0);
    
    const increment = () => {
        setCounterOne(counterOne + 1);
    }

    const decrement = () => {
        setCounterOne(counterOne - 1);
    }

    return (
        <>
            <h1>{counterOne}</h1>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
        </>
    )
};