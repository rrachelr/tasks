import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DhValue {
    setDhValue: () => void;
}

function Doubler({ setDhValue }: DhValue): JSX.Element {
    return <Button onClick={setDhValue}>Double</Button>;
}

function Halver({ setDhValue }: DhValue): JSX.Element {
    return <Button onClick={setDhValue}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const double = () => setDhValue(2 * dhValue);
    const half = () => setDhValue(0.5 * dhValue);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={double}></Doubler>
            <Halver setDhValue={half}></Halver>
        </div>
    );
}
