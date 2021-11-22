import React from "react";
import "./Product.css"
import * as featuredProducts from "../../mocks/es-mx/featured-products.json"

export class Product extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className="containerGrid">
                    <h1>Products</h1>
                    <ul className="grid">
                    {featuredProducts && featuredProducts.results.map( (product, index) => 
                        <li key={product.id} className="containerItem">
                            <img src={product.data.mainimage.url} alt={product.data.mainimage.alt} title={product.data.name} />
                            <span>{product.data.name}</span>
                            <span>{product.data.category.slug}</span>
                            <span>{`$ ${product.data.price}`}</span>
                        </li>
                    )}
                    </ul>
                </div>
        )
    }
}