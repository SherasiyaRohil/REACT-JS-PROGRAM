// Write a code in which parent component passes a memoized callback to a child
// that prints a message on click. (A)
import React, { useCallback} from 'react';
import ChildComponent from './ChildComponent';


function Parantecomponenet() {
    const handleClick = useCallback(() => {
        return () => {
            console.log("Child component clicked Paranete componenet !");
        };
    }, []);

    return (
        <div>
            <ChildComponent onClick={handleClick} />
        </div>
    )
}

export default Parantecomponenet
