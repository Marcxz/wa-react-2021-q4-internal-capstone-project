import "./Home.css"

import React from "react"
import { Banner } from "./featuredBanners/Banner";
import Category  from "./productCategories/Category"
import Product from "./products/Product";
import { useState } from "react/cjs/react.development";
import {Route, Routes} from 'react-router-dom'
import ProductDetail from "./productDetail/ProductDetail"

function Home() {

    const [arrCategory, setCategory] = useState([]);
    
    return (
        <Routes>
            <Route path={"/"} element={<Banner />} />
            <Route path={"/home"} element={<Banner />} />
            <Route exact path={"/productDetail/:id"} element={<ProductDetail />} />
            <Route exact path='/products' element={<GalleryProduct arrCategory={arrCategory} setCategory={setCategory} />} />
        </Routes>
    )
}

function GalleryProduct ({arrCategory, setCategory}) {
    return (
        <React.Fragment>    
            <div className="containerCategoryProducts">
                <Category setCategory={setCategory} />
                <Product arrCategory={arrCategory} setCategory={setCategory} />
            </div>
        </React.Fragment>
    )
}

export default Home;
