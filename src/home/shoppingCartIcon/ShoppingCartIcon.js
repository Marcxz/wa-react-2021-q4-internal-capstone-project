import "./ShoppingCartIcon.css"
import { useContext } from "react";
import { Link } from "react-router-dom"
import EcommerceContext from "../../state/Context";
function ShoppingCartIcon() {
    const {quantityCart} = useContext(EcommerceContext)

    return (
        <Link to="/cart">
            <div className="container_cart">
                <img className="img_cart" src="/assets/shopping_cart_icon.png" alt="shopping cart icon" title="shopping cart icon" />
                {quantityCart > 0 && 
                    <span className="dot">{quantityCart}</span>
                }
            </div>
        </Link>
    )
}

export default ShoppingCartIcon;