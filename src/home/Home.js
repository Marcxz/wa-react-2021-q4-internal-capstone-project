import "./Home.css"

import React, { useState } from "react"
import { Route, Routes } from 'react-router-dom'

import Banner from "./featuredBanners/Banner";
import Category  from "./productCategories/Category"
import Product from "./products/Product";
import ProductDetail from "./productDetail/ProductDetail"
import SearchProduct from "./searchProduct/SearchProduct";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import Checkout from "./checkout/Checkout";


function Home() {
  
    return (
        <Routes>
            <Route path={"/"} element={<Banner />} />
            <Route path={"/home"} element={<Banner />} />
            <Route exact path='/products' element={<GalleryProduct />} />
            <Route exact path='/search' element={<SearchProduct />} />
        </Routes>
    )
}

function GalleryProduct () {
    return (
        <React.Fragment>    
            <div className="containerCategoryProducts">
                <Category />
                <Product />
            </div>
        </React.Fragment>
    )
}

export default Home;
