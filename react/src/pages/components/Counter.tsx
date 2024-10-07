import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";

const Counter: React.FC <{player: string}> = (props) => {
    const [counter, setCounter] = useState(0);

    const [playerName] = useState(props.player);

    const increment = () => {
        setCounter(prev => (prev < 24 ? prev + 1 : prev));
    }

    const decrement = () => {
        setCounter(prev => (prev > 0 ? prev - 1 : prev));
    }

    return (    
        <>
            <div className="linha">
                <div className="imagem-container">
                    <Image src={`/scoreboard/${counter}.jpg`} alt={`Imagem ${counter}.jpg`}></Image>
                    <div className="botoes">
                        <h1>{playerName}</h1>
                        <Button onClick={increment}>+</Button>
                        <Button onClick={decrement}>-</Button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Counter;