import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function CounterEffect() {
    const [counterOne, setCounterOne] = useState(0);

    const loging = () => {
        console.log("Oi");
    }

    const count = () => {
        setCounterOne(counterOne + 1);
    }

    useEffect(loging, [counterOne])

    return (
        <>
            <Button onClick={count}>Logar Mensagem</Button>
        </>
    )
};