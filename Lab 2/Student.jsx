// ⁠Display Students stored in array using ReactJS. (B)
import React from 'react'

const Students=[
    {id:1,name:'john doe',age:20,course:'computer science'},
    {id:2,name:'jane smith',age:22,course:'mechanical engineering'},
    {id:3,name:'alice johnson',age:21,course:'civil engineering'},
    
]
function Student() {
    return (
        <div>
            <h1>Students List</h1>
            <ul>
                {Students.map((student) => (
                    <li key={student.id}>
                        {student.name} - Age: {student.age}, Course: {student.course}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Student