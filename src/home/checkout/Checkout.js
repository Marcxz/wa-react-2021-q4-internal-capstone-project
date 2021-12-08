import "./Checkout.css"
import React, { useContext } from "react"
import { Link } from "react-router-dom" 
import EcommerceContext from "../../state/Context"

function Checkout () {
    const {cart, setCartProduct, 
        quantityCart, setQuantityCart,
        totalCart, setTotalCart} = useContext(EcommerceContext)

    return (
        <div className="containerCheckout">
            <Link to="/cart">
                <button className="btn"> 
                    <img className="iconLeft" alt="add to cart icon" src="/assets/arrow_back.png" />
                    Regresar
                </button>
            </Link>
            <div class="rowCheckout">
                <h1>Proceso de Pago</h1>
            </div>
            
        </div>
    )
        
}

export default Checkout;