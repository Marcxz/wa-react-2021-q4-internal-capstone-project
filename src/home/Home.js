import "./Home.css"

import React from "react"
import { Banner } from "./featuredBanners/Banner";
import Category  from "./productCategories/Category"
import Product from "./products/Product";
import { useState } from "react/cjs/react.development";

function Home({isProduct, setIsProduct}) {

    const handleProduct = () => {
        setIsProduct(true)
    }
    const [category, setCategory] = useState("muebles");

    if (isProduct) {
        return (
                <div className="containerCategoryProducts">
                    <Category setCategory={setCategory} />
                    <Product category={category} setCategory={setCategory} />
                </div>
            )
        }
        return (
            <div className="containerHome">
                <Banner />
                <button className="btn" onClick={handleProduct}>View All Products</button>
            </div>
        )
    
}

export default Home;
