import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisbility] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => setVisbility(!visible)}>
                Reveal Answer
            </Button>
            {visible && <div>42</div>}
        </div>
    );
}
