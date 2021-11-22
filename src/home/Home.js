import "./Home.css"

import React from "react"
import { Banner } from "./featuredBanners/Banner";
import { Category } from "./productCategories/Category"
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="containerHome">
                <Banner />
                <Category />
            </div>
        )
    }
}

