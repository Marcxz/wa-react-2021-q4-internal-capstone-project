import "./Home.css"

import React, { useState } from "react"
import Banner from "./featuredBanners/Banner";
import Category  from "./productCategories/Category"
import Product from "./products/Product";
import {Route, Routes} from 'react-router-dom'
import ProductDetail from "./productDetail/ProductDetail"
import SearchProduct from "./searchProduct/SearchProduct";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import Checkout from "./checkout/Checkout";

function Home() {

    const [arrCategory, setCategory] = useState([]);
    
    return (
        <Routes>
            <Route path={"/"} element={<Banner arrCategory={arrCategory} setCategory={setCategory}/>} />
            <Route path={"/home"} element={<Banner arrCategory={arrCategory} setCategory={setCategory} />} />
            <Route exact path={"/productDetail/:id"} element={<ProductDetail />} />
            <Route exact path='/products' element={<GalleryProduct arrCategory={arrCategory} setCategory={setCategory} />} />
            <Route exact path='/search' element={<SearchProduct />} />
            <Route exact path='/cart' element={<ShoppingCart />} />
            <Route exact path='/checkout' element={<Checkout />} />
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
