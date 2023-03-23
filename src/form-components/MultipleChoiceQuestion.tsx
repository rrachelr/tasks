import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currChoice, setCurrChoice] = useState<string>(options[0]);
    const text = currChoice === expectedAnswer ? "✔️" : "❌";
    function updateCurrChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="answers">
                    <Form.Label></Form.Label>
                    <Form.Select value={currChoice} onChange={updateCurrChoice}>
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            {text}
        </div>
    );
}
