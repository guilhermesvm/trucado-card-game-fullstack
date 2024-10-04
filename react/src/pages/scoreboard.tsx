import React  from 'react';
import Counter from './components/Counter';
import CounterEffect from './components/CounterEffect';

export default function Scoreboard() {
    return (
        <>
            <CounterEffect></CounterEffect>
            <Counter></Counter>
            <Counter></Counter>
        </>
    )
};

