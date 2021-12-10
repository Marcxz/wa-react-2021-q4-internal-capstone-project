import "./Product.css"

import React, { useContext } from "react";
import { Link } from "react-router-dom"
import EcommerceContext from "../../state/Context";

export default function Product({featuredProducts}) {
    const {cart, setCartProduct, 
        quantityCart, setQuantityCart, 
        setTotalCart} = useContext(EcommerceContext);

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
    return (
        <div className="containerGrid">
            <div>
                <h1>Productos:</h1> 
            </div>
            <ul className="grid">
            {featuredProducts.results && featuredProducts.results.filter(p => p.selected).map( (product, index) => 
                <li key={product.id} className="containerItem">
                    <img className="mainImage" src={product.data.mainimage.url} alt={product.data.mainimage.alt} title={product.data.name} />
                    <span>{product.data.name}</span>
                    <span>{product.data.category.slug}</span>
                    <span>{`$ ${product.data.price}`}</span>
                    <span>
                        <Link to={`/productDetail/${product.id}`}>
                            <button className="btnCartProduct">
                                Ver detalle del producto
                                <img className="iconLeft" alt="Detalle del articulo" src="/assets/article_detail.png" />
                            </button>
                        </Link>
                    </span>
                    <button onClick={ () => addCartProduct(product)} className="btnCartProduct">
                        Agregar al carrito
                        <img className="iconRight" alt="Agregar al carrito" src="/assets/add_to_cart.png" />
                    </button>
                </li>                    
            )}
            </ul>
        </div>
        )
}
