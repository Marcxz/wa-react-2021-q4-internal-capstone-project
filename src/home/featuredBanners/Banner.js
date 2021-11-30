import "./Banner.css"
import * as featuredBanners from "../../mocks/es-mx/featured-banners.json"
import React from "react"
import { Link } from "react-router-dom"

export class Banner extends React.Component {

    render() {
        return (
        <React.Fragment>
            <div className="containerHome">
                <div id="slider">
                    <h1>Featured Banners</h1>
                    <ul class="slider">
                        {featuredBanners && featuredBanners.results.map((feature, index) =>
                        <li key={feature.id} id={feature.id}>
                            <img src={feature.data.main_image.url} alt={feature.data.main_image.alt} />
                        </li>  
                        )}
                    </ul>
                    <ul class="menu">
                        {featuredBanners && featuredBanners.results.map((feature, index) => 
                            <li key={feature.id}>
                                <a href={`#${feature.id}`}>{index+1}</a>
                            </li>
                        )}
                    </ul>
                </div>
                <Link to="/productDetail">
                    <button className="btn">View Product Detail</button>
                </Link>
                <Link to="/products">
                    <button className="btn">View All Products</button>
                </Link>
            </div>
        </React.Fragment>    
        )
    }
}