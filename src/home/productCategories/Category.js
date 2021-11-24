import React from "react";
import "./Category.css"
import * as productCategories from "../../mocks/es-mx/product-categories.json"

export default function Category({setCategory}) {
    const handleCategory = (category) => {
        setCategory(category)
    }

    return (
        <div className="containerGridCategory">
            <h1>Categories</h1>
            <ul className="gridCategory">
            {productCategories && productCategories.results.map( (category, index) => 
                <li key={category.id} className="containerItemCategory">
                    <span>{category.data.name}</span>
                    <img onClick={() => {handleCategory(category.data.name)}} title={category.data.name} src={category.data.main_image.url} alt={category.data.main_image.alt} />
                </li>
            )}
            </ul>
        </div>
    )
}