import React from "react";
import "./Category.css"
import * as productCategories from "../../mocks/es-mx/product-categories.json"

export class Category extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className="containerGrid">
                    <h1>Product Categories</h1>
                    <ul className="grid">
                    {productCategories && productCategories.results.map( (category, index) => 
                        <li key={category.id} className="containerItem">
                            <span>{category.data.name}</span>
                            <img title={category.data.name} src={category.data.main_image.url} alt={category.data.main_image.alt} />
                        </li>
                    )}
                    </ul>
                </div>
        )
    }
}