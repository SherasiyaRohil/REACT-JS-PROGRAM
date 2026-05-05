import React from 'react'

function SecondChild({ addItem }) {
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
        </div>
    )
}

export default SecondChild
