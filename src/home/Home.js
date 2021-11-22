import "./Home.css"

import React from "react"
import { Banner } from "./featuredBanners/Banner";
import { Category } from "./productCategories/Category"
import { Product } from "./products/Product";
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="containerHome">
                <Banner />
                <Category />
                <Product />
            </div>
        )
    }
}

