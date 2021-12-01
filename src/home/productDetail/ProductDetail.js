import "./ProductDetail.css"

import { React } from "react"
import * as featuredProducts from "../../mocks/es-mx/products.json"
import { useEffect, useState } from "react/cjs/react.development"
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
    const params = useParams()
    const [product, setProduct] = useState()
    const [cantidad, setCantidad] = useState(1)
    const [displayImage, setDisplayImage] = useState({
        url: "",
        alt: "",
    })

    const handleProduct = () => {
        if (!product) {
            const arrP = featuredProducts.results.filter((p) => p.id === params.id.toString())
            setProduct(arrP[0])
        }
    }
    const handleCantidad = (c, s) => {
        if (c <= 0) {
            setCantidad(0);
        }
        else if (c >= s) {
            setCantidad(s)
        }
        else {
            setCantidad(c);
        }
        console.log(featuredProducts.results[0])
        return null;
    }

    const handleImage = (image) => {
        setDisplayImage({
            url: image.image.url,
            alt: image.image.alt,
        })
    }
    
    handleProduct()

    useEffect(() => {
        if(displayImage.url === "" && product) {
            setDisplayImage({
                url: product.data.mainimage.url,
                alt: product.data.mainimage.alt,
            })
        }
    })
    if (product) {
    return (
        <>
        
        <div className="containerProductDetail">
            <Link to="/products">
                <button className="btn">Regresar</button>
            </Link>
            <div className="splitterProductDetail">
                <div className="sectionProductDetail">
                    <img className="mainImageProductDetail" src={displayImage.url} alt={displayImage.alt} />
                    <span>Imagenes Anexas</span>
                    <div className="sidebarImagesProductDetail">
                        <ul className="gridProductDetail">
                            {product.data.images.map((image, index) =>      
                                <li key={image.id} className="containerItemProductDetail">
                                    <img src={image.image.url} alt={image.image.alt} title={image.image.title} onClick={() => handleImage(image)} />
                                </li>                    
                            )}
                        </ul>
                    </div>
                </div>
                <div className="sectionProductDetail">
                    <h1>Detalles del Producto</h1>
                    <div className="containerRowProductDetail">
                        <span className="title">Nombre del Producto:</span>
                        <span className="description">{product.data.name}</span>
                    </div>
                    <div className="containerRowProductDetail">
                        <span className="title">SKU:</span>
                        <span className="description">{product.data.sku}</span>
                    </div>
                    <div className="containerRowProductDetail">
                        <span className="title">Categoria:</span>
                        <span className="description">{product.data.category.slug}</span>
                    </div>
                    <div className="containerRowProductDetail">
                        <span className="title">Precio:</span>
                        <span className="description">$ {product.data.price}</span>
                    </div>
                    <div className="containerRowProductDetail">
                        <span className="title">Descripción:</span>
                        <span className="description"></span>
                    </div>
                    <div className="containerRowProductDetail">
                        <p>{product.data.description[0].text}</p>
                    </div>
                    <div className="containerRowProductDetail">
                        <span className="title">Stock:</span>
                        <span className="description">{product.data.stock}</span>
                    </div>
                    <div className="containerRowProductDetail">
                        <span className="title">Cantidad a llevar: </span>
                        <div className="description">
                            <button onClick={() => handleCantidad(cantidad - 1, product.data.stock)}>-</button>
                            <input type="number" disabled value={cantidad} />
                            <button onClick={() => handleCantidad(cantidad + 1, product.data.stock)}>+</button>
                        </div>
                    </div>
                    <div className="containerRowProductDetail">
                            <button>Agregar al carrito</button>
                    </div>
                    <div className="separatorProductDetail" />
                    <div className="containerRowProductDetail">
                        <span className="title">Características:</span>
                        <span className="description"></span>
                    </div>
                      <table class="styled-table">
                      <thead>
                          <tr>
                              <th>Atributo</th>
                              <th>Valor</th>
                          </tr>
                        
                      </thead>
                      <tbody>
                        {product.data.specs.map((spec, index) => 
                          <tr>
                              <td>{spec.spec_name}</td>
                              <td>{spec.spec_value}</td>
                          </tr>
                        )} 
                      </tbody>
                  </table>  
                </div>
            </div>
        </div>
    </>
    )
  }
  else {
      return (
          <h1>Producto no disponible</h1>
      )
  }
}

export default ProductDetail;
