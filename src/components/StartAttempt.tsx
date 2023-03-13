import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }

    function stopQuiz(): void {
        setProgress(false);
    }

    return (
        <div>
            <Button
                disabled={inProgress === true || attempts < 1}
                onClick={startQuiz}
            >
                Start Quiz
            </Button>
            <Button disabled={inProgress === false} onClick={stopQuiz}>
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress === true}
                onClick={() => setAttempts(attempts + 1)}
            >
                Mulligan
            </Button>
            {attempts}
        </div>
    );
}
