import "./Home.css"

import React from "react"
import { Banner } from "./featuredBanners/Banner";
import { Category } from "./productCategories/Category"
import { Product } from "./products/Product";

function Home({isProduct, setIsProduct}) {

    const handleProduct = () => {
        setIsProduct(true)
    }

    if (isProduct) {
        return (
                <div className="containerHome">
                    <Product />
                </div>
            )
        }
        return (
            <div className="containerHome">
                <Banner />
                <Category />
                <button className="btn" onClick={handleProduct}>View All Products</button>
            </div>
        )
    
}

export default Home;
