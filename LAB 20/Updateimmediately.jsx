// Write a code in which main text updates immediately; preview text updates
// slowly using useDeferredValue. (B)

import { useState, useDeferredValue } from "react";

export default function TextUpdates() {
    const [text, setText] = useState("");
    const deferredText = useDeferredValue(text);

    return (
        <>
            <input placeholder="type here..."
                value={text}
                onChange={e => setText(e.target.value)}
            />

            <h3>Main Text: {text}</h3>
            <h3>Preview (Deferred): {deferredText}</h3>
        </>
    );
}
