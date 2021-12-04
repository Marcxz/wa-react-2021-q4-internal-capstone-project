import "./Banner.css"
import * as featuredBanners from "../../mocks/es-mx/featured-banners.json"
import React from "react"
import { Link } from "react-router-dom"
import Product from "../products/Product"
function Banner ({arrCategory, setCategory}) {

        return (
        <React.Fragment>
            <div className="containerHome">
                <div id="slider">
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
                <Product arrCategory={arrCategory} setCategory={setCategory} />
 
                <Link to="/products">
                    <button className="btn">Ver todos los productos</button>
                </Link>

            </div>
        </React.Fragment>    
        )
}

export default Banner;