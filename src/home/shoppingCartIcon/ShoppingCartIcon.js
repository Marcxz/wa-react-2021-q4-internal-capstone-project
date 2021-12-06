import "./ShoppingCartIcon.css"
import { Link } from "react-router-dom"

function ShoppingCartIcon() {
    return (
        <Link to="/cart">
            <div className="container_cart">
                <img className="img_cart" src="assets/shopping_cart_icon.png" alt="shopping cart icon" title="shopping cart icon" />
            </div>
        </Link>
    )
}

export default ShoppingCartIcon;