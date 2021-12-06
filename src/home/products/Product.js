import "./Product.css"

import React from "react";
import { Link } from "react-router-dom"

import Pagination from '../pagnation/Pagination'
import * as featuredProducts from "../../mocks/es-mx/products.json"

export default function Product({arrCategory, setCategory}) {

    return (
        <div className="containerGrid">
            <div>
                <h1>Productos:</h1> 
            </div>
            <ul className="grid">
            {featuredProducts.results && featuredProducts.results.filter(product => arrCategory.includes(product.data.category.slug.toLowerCase())).map( (product, index) => 
                <li key={product.id} className="containerItem">
                    <img src={product.data.mainimage.url} alt={product.data.mainimage.alt} title={product.data.name} />
                    <span>{product.data.name}</span>
                    <span>{product.data.category.slug}</span>
                    <span>{`$ ${product.data.price}`}</span>
                    <span>
                        <Link to={`/productDetail/${product.id}`}>
                            <button>Ver detalle del producto</button>
                        </Link>
                    </span>
                    <button>Agregar al carrito</button>
                </li>                    
            )}
            </ul>
            <Pagination />
        </div>
        )
}
