// Calculate factorial of a number (stored as a state) using useMemo. (A)
import React, { useState, useMemo } from 'react';

function Factorial() {
    const [number, setNumber] = useState(1);

    const factorial = useMemo(() => {
        const computeFactorial = (n) => {
            if (n <= 1) return 1;
            return n * computeFactorial(n - 1);
        };
        return computeFactorial(number);
    }, [number]);

    return (
        <div>
            <h2>Factorial Calculator</h2>
           <button onClick={() => setNumber(number + 1)}>Increment</button>
            <p>Factorial: {factorial}</p>
        </div>
    );
}

export default Factorial;