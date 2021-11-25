import React from "react";
import "./Product.css"
import * as featuredProducts from "../../mocks/es-mx/products.json"

export default function Product({arrCategory, setCategory}) {

    return (
        <div className="containerGrid">
            <h1>Products</h1>
            <ul className="grid">
            {featuredProducts && featuredProducts.results.filter(product => arrCategory.includes(product.data.category.slug.toLowerCase())).map( (product, index) => 
                <li key={product.id} className="containerItem">
                    <img src={product.data.mainimage.url} alt={product.data.mainimage.alt} title={product.data.name} />
                    <span>{product.data.name}</span>
                    <span>{product.data.category.slug}</span>
                    <span>{`$ ${product.data.price}`}</span>
                </li>                    
            )}
            </ul>

            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#">&raquo;</a> 
            </div>
        </div>
        )
}
