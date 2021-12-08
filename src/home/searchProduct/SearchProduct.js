import "./SearchProduct.css"
import React, {useState, useEffect, useContext} from "react";
import * as featuredProducts from "../../mocks/es-mx/products.json"
import EcommerceContext from "../../state/Context";

function SearchProduct() {
    const [criterio, setCriterio] = useState("")
    const [products, setProducts] = useState(featuredProducts.results)     
    
    const {cart, setCartProduct, 
        quantityCart, setQuantityCart, 
        setTotalCart} = useContext(EcommerceContext);
    
        const queryProducts = () => {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            // here we will filter the products
            if ((criterio === "" || params.get('q') !== criterio) && params.get('q').length > 0) {    
                setCriterio(params.get('q'))
                let features = []
                featuredProducts.results.map((p) => 
                    (p.data.name.toLowerCase().indexOf(params.get('q').toLowerCase()) >= 0) ?
                        features.push(p) : null
                )
                setProducts(features)
            }
    }

    const addCartProduct = (pro) => {
        let found = false;
        let tmpTotal = 0;
        // the product already is in the cart
        cart.map((p) => {
            if(pro.id === p.product.id) {
                found = true;
                p.quantity += 1;
            }
            tmpTotal += p.quantity * p.product.data.price;
            return null;
        })
        // the product isn't in the cart
        if (!found) {
            cart.push({
                product: pro,
                quantity: 1,
            })
            tmpTotal += 1 * pro.data.price;
        }
        setQuantityCart(quantityCart+1)
        setTotalCart(tmpTotal)
        setCartProduct(cart)
        alert("Se agrego el producto en el carrito")
    }

    useEffect(() => {
        queryProducts()
    })
    if (products.length === 0) {
        return (
            <div className="containerSearchProduct">
                <h1>No hubo resultados para con el criterio especificado: {criterio}</h1>
            </div>
        )    
    } else {
        return (
            <div className="containerSearchProduct">
                <h3>Resultados encontrados con el criterio  ({products.length}): {criterio}</h3>
                {products && products.map((product, index) => 
                    <div key={index} className="cardSearchProduct">
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
                                    <button className="btnCart" onClick={() => addCartProduct(product)}>
                                        Agregar al carrito
                                        <img className="iconRight" alt="add to cart icon" src="/assets/add_to_cart.png" /> 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default SearchProduct;