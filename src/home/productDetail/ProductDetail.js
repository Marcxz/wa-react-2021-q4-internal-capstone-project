import "./ProductDetail.css"

import { React } from "react"
import * as featuredProducts from "../../mocks/es-mx/products.json"
import { useState } from "react/cjs/react.development"

function ProductDetail({id}) {

    return (
        <div className="containerProductDetail">
            <div className="splitterProductDetail">
                <div className="sectionProductDetail">
                    <img className="mainImageProductDetail" src={featuredProducts.results[0].data.mainimage.url}
                    alt={featuredProducts.results[0].data.mainimage.alt} />
                    <span>Imagenes Anexas</span>
                    <div className="sidebarImagesProductDetail">
                        <ul className="gridProductDetail">
                            {featuredProducts.results && featuredProducts.results[0].data.images.map((image, index) =>      
                                <li key={image.id} className="containerItemProductDetail">
                                    <img src={image.image.url} alt={image.image.alt} title={image.image.title} />
                                </li>                    
                            )}
                        </ul>
                    </div>
                </div>
                <div className="sectionProductDetail">
                    <h1>{featuredProducts.results[0].data.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
