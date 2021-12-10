import "./Home.css"

import React, { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'

import Banner from "./featuredBanners/Banner";
import Category  from "./productCategories/Category"
import Product from "./products/Product";
import ProductDetail from "./productDetail/ProductDetail"
import SearchProduct from "./searchProduct/SearchProduct";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import Checkout from "./checkout/Checkout";
import { useFeaturedBanners } from "../utils/hooks/useFeaturedBanners";

function Home() {
    
    const [arrCategory, setCategory] = useState([]);
    const [arrProducts, setProduct] = useState([]);

    const { data: featuredCategories, isLoading: isLoadingCategories } = useFeaturedBanners("category", 30);  
    const { data: featuredProducts, isLoading: isLoadingFeatureProduct } = useFeaturedBanners("product", 1000);

    useEffect(() => {
        if(!isLoadingCategories) {
            setCategory(featuredCategories.results)
        }
        if(!isLoadingFeatureProduct) {
            setProduct(featuredProducts)
        }
    })

    return (
        <Routes>
            <Route path={"/"} element={<Banner />} />
            <Route path={"/home"} element={<Banner />} />
            <Route exact path='/products' element={<GalleryProduct isLoadingCategories={isLoadingCategories} arrCategory={arrCategory} setCategory={setCategory} isLoadingFeatureProduct={isLoadingFeatureProduct} featuredProducts={arrProducts} setProduct={setProduct}/>} />
            <Route exact path='/products/:categoryName' element={<GalleryProduct isLoadingCategories={isLoadingCategories} arrCategory={arrCategory} setCategory={setCategory} isLoadingFeatureProduct={isLoadingFeatureProduct} featuredProducts={arrProducts} setProduct={setProduct}/>} />
            <Route exact path='/search' element={<SearchProduct />} />
            <Route exact path='/cart' element={<ShoppingCart />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route exact path={"/productDetail/:id"} element={<ProductDetail featuredProducts={arrProducts} />} />
        </Routes>
    )
}

function GalleryProduct ({isLoadingCategories, arrCategory, setCategory, isLoadingFeatureProduct, featuredProducts, setProduct}) {
    return (
        <React.Fragment>    
            <div className="containerCategoryProducts">
            <Category isLoadingCategories={isLoadingCategories} arrCategory={arrCategory} setCategory={setCategory} isLoadingFeatureProduct={isLoadingFeatureProduct} featuredProducts={featuredProducts} setProduct={setProduct} />
                <Product featuredProducts={featuredProducts} />
            </div>
        </React.Fragment>
    )
}

export default Home;
