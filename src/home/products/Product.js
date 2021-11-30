import React, { useState } from "react";
import "./Product.css"
import Pagination from '../pagnation/Pagination'
import * as featuredProducts from "../../mocks/es-mx/products.json"
import * as productCategories from "../../mocks/es-mx/product-categories.json"
export default function Product({arrCategory, setCategory}) {

    const [products, setProducts] = useState(featuredProducts)
    
    const ViewAllProducts = () => {
        if(productCategories.results && productCategories.results.length >= 0) {
            let categories = [];
            productCategories.results.map((category) => {
                categories.push(category.data.name.toLowerCase())
            })
            setCategory(categories)
        }
    }

    return (
        <div className="containerGrid">
            <div>
                <h1>Products:</h1> 
                <button className="btn" onClick={() => {ViewAllProducts()}}>View All Products</button>
            </div>
            <ul className="grid">
            {featuredProducts.results && featuredProducts.results.filter(product => arrCategory.includes(product.data.category.slug.toLowerCase())).map( (product, index) => 
                <li key={product.id} className="containerItem">
                    <img src={product.data.mainimage.url} alt={product.data.mainimage.alt} title={product.data.name} />
                    <span>{product.data.name}</span>
                    <span>{product.data.category.slug}</span>
                    <span>{`$ ${product.data.price}`}</span>
                    <button>View Details</button>
                    <button>Add to Car</button>
                </li>                    
            )}
            </ul>
            <Pagination />
        </div>
        )
}
