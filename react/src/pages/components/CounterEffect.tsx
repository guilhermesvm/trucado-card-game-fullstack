import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function CounterEffect() {
    const [counter, setCounterOne] = useState(0);

    const count = () => {
        setCounterOne(counter + 1);
    }

    const loging = () => {
        console.log("Oi");
    }

    useEffect(loging, [counter]);

    return (
        <>
            <Button onClick={count}>Logar Mensagem</Button>
        </>
    );
}