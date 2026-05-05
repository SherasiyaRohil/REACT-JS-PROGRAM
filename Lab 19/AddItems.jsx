// Write a program which Add, toggle, and remove todo items using reducer. (A)
import React, { useReducer, useState } from 'react';

const Action={
    ADD:'ADD',
    REMOVE:'REMOVE'
}

function reducer(state,action){
    switch(action.type){
        case Action.ADD:
            return [...state, { id: Date.now(), text: action.payload, toggle: false }];
        case Action.REMOVE:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

function AddItems() {
    const [state, dispatch] = useReducer(reducer, []);
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            dispatch({ type: Action.ADD, payload: inputValue });
            setInputValue('');
        }
    };

    const handleRemove = (id) => {
        dispatch({ type: Action.REMOVE, payload: id });
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
            <button className='bg-cyan-400 border-2 ml-2 text-lg' onClick={handleAdd}>Add</button>
            <ul className='mt-4'>
                {state.map(item => (
                    <li key={item.id}>
                        {item.text}
                        <button className='bg-red-500 border-2 ml-10 text-lg' onClick={() => handleRemove(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}
export default AddItems
