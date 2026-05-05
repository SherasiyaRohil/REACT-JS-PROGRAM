// Display Products stored in array using ReactJS (C )
import React from 'react'

const Products=[
    {id:1,name:'laptop',price:50000,brand:'dell'},
    {id:2,name:'mobile',price:20000,brand:'samsung'},
    {id:3,name:'tablet',price:30000,brand:'apple'},

]

function Product() {
    return (
        <div>
            <h1>Products List</h1>
            <ul>
                {Products.map((product) => (
                    <li key={product.id}>
                        {product.name} - Price: ₹{product.price}, Brand: {product.brand}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Product