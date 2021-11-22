import "./Banner.css"
import * as featuredBanners from "../../mocks/es-mx/featured-banners.json"
import React from "react"


export class Banner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
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
                        <li>
                            <a href={`#${feature.id}`}>{index+1}</a>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
