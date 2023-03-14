import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎉" | "💘" | "🐰" | "🦃" | "🎄";

    const YEAR_TRANSITIONS: Record<Holiday, Holiday> = {
        "🎉": "💘",
        "💘": "🐰",
        "🐰": "🦃",
        "🦃": "🎄",
        "🎄": "🎉"
    };

    const ABC_TRANSITIONS: Record<Holiday, Holiday> = {
        "🎄": "🐰",
        "🐰": "🎉",
        "🎉": "🦃",
        "🦃": "💘",
        "💘": "🎄"
    };

    function yearTransition(): void {
        const newEmoji = YEAR_TRANSITIONS[holiday];
        setHoliday(newEmoji);
    }

    function abcTransition(): void {
        const newEmoji = ABC_TRANSITIONS[holiday];
        setHoliday(newEmoji);
    }

    const [holiday, setHoliday] = useState<Holiday>("🎉");

    return (
        <div>
            Holiday: {holiday}
            <Button onClick={abcTransition}>Advance by Alphabet</Button>
            <Button onClick={yearTransition}>Advance by Year</Button>
        </div>
    );
}
