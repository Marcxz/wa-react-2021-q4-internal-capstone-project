import "./ShoppingCart.css"
import React, {useContext} from "react"
import { Link } from "react-router-dom"
import EcommerceContext from "../../state/Context"

function ShoppingCart() {
    const {cart, setCartProduct, 
           quantityCart, setQuantityCart,
           totalCart, setTotalCart} = useContext(EcommerceContext)

    const removeProduct = (product) => {
        
        let tmpCart = cart;
        tmpCart = tmpCart.filter(p => p.product.id !== product.product.id);
        setCartProduct(tmpCart);
        
        setTimeout(updateTotal(), 100);

    }

    const updateTotal = () => {
        let tmpQuantity = 0;
        let tmpTotal = 0;
        cart.map(p => {
            tmpQuantity += p.quantity;
            tmpTotal += p.quantity * p.product.data.price;
            return null;
        })
        setQuantityCart(tmpQuantity);
        setTotalCart(tmpTotal)
    }
    const checkout = () => {
        alert('Proceed to checkout');
    }

    // Rendering
    if(cart.length === 0) {
        return (
            <div className="containerShoppingCart">
                <h1>No se encuentran productos actualmente en el carrito</h1>
            </div>
        )    
    } else {
       return (
           <div className="containerSearchProduct">
               <h1>Carrito de compras</h1>
               
                        {cart.length > 0 && cart.map( (p, index) => 
                            <div key={index} className="cardSearchProduct">
                            <img src={p.product.data.mainimage.url} alt={p.product.data.mainimage.alt} />
                            <div className="containerDataSearchProduct">
                                <span className="titleProduct">{p.product.data.name}</span>
                                <div className="containerRowPD">
                                        <div className="containerShortDescriptionSearchProduct">
                                            <div className="title"></div>
                                            <span className="description">{p.product.data.short_description}</span>
                                        </div>
                                    </div>
                                <div className="containerRowPD">
                                    <div className="containerSubDataSearchProduct">
                                        <span className="title">Categoria:</span>
                                        <span className="description">{p.product.data.category.slug}</span>
                                    </div>
                                </div>
                                <div className="containerRowPD">
                                    <div className="containerSubDataSearchProduct">
                                        <span className="title">Precio:</span>
                                        <span className="description">$ {p.product.data.price}</span>
                                    </div>
                                </div>
                                <div className="containerRowPD">
                                    <div className="containerSubDataSearchProduct">
                                        <span className="title">Cantidad:</span>
                                        <span className="description">$ {p.quantity}</span>
                                    </div>
                                </div>
                                <div className="containerRowPD">
                                    <div className="containerSubDataSearchProduct">
                                        <span className="title">Subtotal:</span>
                                        <span className="description">$ {p.quantity * p.product.data.price}</span>
                                    </div>
                                </div>
                                <div className="containerRowPD">
                                    <div className="containerSubDataSearchProduct">
                                            <button className="btnCart" onClick={() => removeProduct(p)}>
                                                <img className="iconLeft" alt="Eliminar" src="/assets/delete.png" />
                                                Eliminar   
                                            </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    )}
                    <div  className="cardSearchProduct">
                        <div className="containerRowPD">
                                <div className="containerShortDescriptionSearchProduct">
                                    <div className="title"># de productos: </div>
                                    <span className="description">{quantityCart}</span>
                                </div>
                                <div className="containerShortDescriptionSearchProduct">
                                    <div className="title">Total: </div>
                                    <span className="description">$ {totalCart}</span>
                                </div>
                                <div className="containerShortDescriptionSearchProduct">
                                    <Link to="/checkout">
                                        <button className="btnCart">
                                            Proceder al Pago
                                            <img className="iconRight" alt="Eliminar" src="/assets/checkout.png" />
                                        </button>
                                    </Link>
                                </div>

                        </div>
                   </div>
               </div>
       )
    }
    
}

export default ShoppingCart;