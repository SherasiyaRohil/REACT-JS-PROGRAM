// Create a responsive table which scroll on mobile view. (A)
import React from 'react';


const data = [
    { id: 1, name: 'darshan', age: 28, department: 'computer Engineer' },
    { id: 2, name: 'hardik', age: 34, department: 'web Designer' },
    { id: 3, name: 'Sam kakadiya', age: 45, department: 'civil Engineer' },
    { id: 4, name: 'Nancy Brown', age: 29, department: 'electial Engineerr'},
];

function Table2() {
    return (
        <div className="p-4">
            <table className="min-w-full border-collapse border border-gray-300 md">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Age</th>
                        <th className="border border-gray-300 px-4 py-2">department</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((person, index) => (
                        <tr
                            key={person.id}
                            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-300'}
                        >
                            <td className="border border-gray-300 px-4 py-2">{person.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{person.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{person.age}</td>
                            <td className="border border-gray-300 px-4 py-2">{person.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table2;