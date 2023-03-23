import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");
    const requested =
        isNaN(parseInt(attemptsRequested)) === true
            ? 0
            : parseInt(attemptsRequested);
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label></Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
            <Button
                disabled={attemptsLeft < 1}
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
            >
                use
            </Button>
            <div>{attemptsLeft}</div>
            <Button onClick={() => setAttemptsLeft(attemptsLeft + requested)}>
                gain
            </Button>
        </div>
    );
}
