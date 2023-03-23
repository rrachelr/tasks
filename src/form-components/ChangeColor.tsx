import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
    "white"
];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("");
    const [allColors] = useState<string[]>(COLORS);
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {allColors.map((color: string) => (
                    <div key={color}>
                        <span style={{ backgroundColor: color }}>{color}</span>
                        <Form.Check
                            inline
                            type="radio"
                            name="color"
                            onChange={(e) => setChosenColor(e.target.value)}
                            id="color"
                            label={color}
                            value={color}
                            checked={chosenColor === color}
                        />
                    </div>
                ))}
            </div>
            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </span>
            </p>
        </div>
    );
}
