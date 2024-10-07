import React  from 'react';
import Counter from './components/Counter';

export default function Scoreboard() {
    return (
        <>
            <div className="placarContainer">
                <Counter player="Nós"></Counter>
                <Counter player="Eles"></Counter>
            </div>
        </>
    )
};

