import React, { useReducer, useState } from 'react';

const Action={
    ADD:'ADD',
    DELETE:'DELETE'
}

function reducer(state,action){
    switch(action.type){
        case Action.ADD:
            return [...state, { id: Date.now(), text: action.payload, toggle: false }];
        case Action.DELETE:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

function AddDeletFunctionality() {
    const [state, dispatch] = useReducer(reducer, []);
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            dispatch({ type: Action.ADD, payload: inputValue });
            setInputValue('');
        }
    };

    const handleDelete = (id) => {
        dispatch({ type: Action.DELETE, payload: id });
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a todo item"
            />
            <button style={{ marginLeft: '10px' }} onClick={handleAdd}>Add</button>
            <ul>
                {state.map(item => (
                    <h1 key={item.id}>
                        {item.text}
                        <button style={{ marginLeft: '10px' }} onClick={() => handleDelete(item.id)}>Delete</button>
                    </h1>
                ))}
            </ul>
        </div>
    );
    
}
export default AddDeletFunctionality;