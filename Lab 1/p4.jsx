import React from 'react'

export default function P4() {
    const fruits= ["apple", "banana", "cherry",];

    
  return (
   <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}

   </ul>
  )
}

