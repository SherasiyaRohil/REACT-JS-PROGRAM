import React, { useRef } from "react";

function InputControlled() {
  const inputRef = useRef();

  const readValue = () => {
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input  className="border-2 border-amber-600 m-5" type="text" ref={inputRef} />
      <button className="border-2 w-18 rounded" onClick={readValue}>click</button>
    </div>
  );
}

export default InputControlled;