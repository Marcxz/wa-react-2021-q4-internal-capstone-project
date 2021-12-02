import "./SearchProduct.css"
import React, {useState, useEffect} from "react";
import * as featuredProducts from "../../mocks/es-mx/products.json"

function SearchProduct() {
    const [criterio, setCriterio] = useState("")
    const [products, setProducts] = useState(featuredProducts.results) 
    const [cantidad, setCantidad] = useState(1)

    const queryProducts = () => {
            // here we will filter the products
            if (criterio === "") {
                setProducts(featuredProducts.results)
                setCriterio("Ya busque")
            }
    }
    
    useEffect(() => {
        queryProducts()
    })
    return (
        <div className="containerSearchProduct">
            <h3>Resultados encontrados con el criterio  ({products.length}): {criterio}</h3>
            {products && products.map((product, index) => 
                <div className="cardSearchProduct">
                <img src={product.data.mainimage.url} alt={product.data.mainimage.alt} />
                <div className="containerDataSearchProduct">
                    <span className="titleProduct">{product.data.name}</span>
                    <div className="containerRowPD">
                            <div className="containerShortDescriptionSearchProduct">
                                <div className="title"></div>
                                <span className="description">{product.data.short_description}</span>
                            </div>
                        </div>
                    <div className="containerRowPD">
                        <div className="containerSubDataSearchProduct">
                            <span className="title">Categoria:</span>
                            <span className="description">{product.data.category.slug}</span>
                        </div>
                    </div>
                    <div className="containerRowPD">
                        <div className="containerSubDataSearchProduct">
                            <span className="title">Precio:</span>
                            <span className="description">$ {product.data.price}</span>
                        </div>
                    </div>
                        <div className="containerRowPD">
                            <div className="containerSubDataSearchProduct">
                                <span className="title">Stock:</span>
                                <span className="description">{product.data.stock}</span>
                            </div>
                        </div>
                        
                        <div className="containerRowPD">
                            <div className="containerSubDataSearchProduct">
                                <button>Agregar al carrito</button>
                            </div>
                        </div>
                </div>
                </div>
            )}
        </div>
    )
}

export default SearchProduct;