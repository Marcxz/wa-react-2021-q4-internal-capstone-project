import "./slider.css"
import * as featuredBanners from "../../mocks/es-mx/featured-banners.json"
import React, { useState } from "react"


export class Slider extends React.Component {
    constructor(props) {
        super(props)
        console.log(featuredBanners)
    }

    render() {
        return (
            <div id="slider">
                <h1>Slider</h1>
                <ul class="slider">
                    {featuredBanners && featuredBanners.results.map((feature, index) =>
                      <li id={feature.id}>
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
