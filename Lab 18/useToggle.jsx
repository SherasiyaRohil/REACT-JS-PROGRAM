// Creating a custom hook in React, also use useDebugValue hook
// • Create a useToggle (custom) hook which return a Boolean flag and a function to
// toggle the state of the flag. (A)

import React, { useDebugValue, useState } from 'react'

function useToggle(Initialvalue=false) {
    const [value,setValue]=useState(Initialvalue)
    const toggleValue=()=>{
        setValue(prev=>!prev)
    }
    useDebugValue(value ? "On" : "Off")
    return [value,toggleValue]
   

}

export default useToggle
