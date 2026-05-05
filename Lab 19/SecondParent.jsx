// Write a code which Add items using memoized addItem handler passed to child
// component from the parent component, make sure child does not re-render
// unnecessarily. (A)
import React, { useState, useCallback} from 'react';
import SecondChild from './SecondChild';

function Parent() {
    const [items, setItems] = useState([]);
    

    const addItem = useCallback(() => {
        setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 6}`]);
    }, []);

    return (
        <div>
            <h1>Items List</h1>
            
            <SecondChild addItem={addItem} />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Parent;

