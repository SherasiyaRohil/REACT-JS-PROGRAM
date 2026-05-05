



import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }), []);

  return <input ref={inputRef} type="text" placeholder="I am the child input" />;
});

export default function Program7() {
  const childRef = useRef();

  const handleFocusClick = () => {
    childRef.current.focus();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Program A: Exposing .focus() to Parent</h3>
      <CustomInput ref={childRef} />
      <button onClick={handleFocusClick} style={{ marginLeft: '10px' }}>
        Focus the Input
      </button>
    </div>
  );
}
