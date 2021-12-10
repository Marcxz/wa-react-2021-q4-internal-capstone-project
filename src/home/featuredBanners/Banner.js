import "./Banner.css"
import React, {useContext} from "react"
import { Link } from "react-router-dom"
import {useFeaturedBanners} from "../../utils/hooks/useFeaturedBanners"
import EcommerceContext from "../../state/Context"
function Banner () {

        const { data: featuredBanners, isLoading: isLoadingFeatureBanners } = useFeaturedBanners("banner", 5);  
        const { data: categories, isLoading: isLoadingCategories } = useFeaturedBanners("category", 30);  
        const { data: featuredProducts, isLoading: isLoadingFeatureProduct } = useFeaturedBanners("product", 16);  
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
        <React.Fragment>
            <div className="containerHome">
            {!isLoadingFeatureBanners ?
                <div id="slider">
                    <ul class="slider">
                        {featuredBanners.results.map((feature, index) =>
                        <li key={feature.id} id={feature.id}>
                            <img src={feature.data.main_image.url} alt={feature.data.main_image.alt} />
                        </li>  
                        )}
                    </ul>
                    <ul class="menu">
                        {featuredBanners.results.map((feature, index) => 
                            <li key={feature.id}>
                                <a href={`#${feature.id}`}>{index+1}</a>
                            </li>
                        )}
                    </ul>
                </div>
            : <h1> Cargando el banner </h1> }
        {!isLoadingCategories ?
            <div className="containerSliderGridCategory">
                {categories.results.map( (category, index) => 
                    <div className="containerSliderCategory" key={category.id}>
                        <span className="categoryName">{category.data.name}</span>
                        <Link to={`/products/${category.data.name}`} >
                            <img className="categoryImage" title={category.data.name} src={category.data.main_image.url} alt={category.data.main_image.alt} />
                        </Link>
                    </div> 
                )}
            </div>
        : <h1>Categorias cargando</h1> }
        
        {!isLoadingFeatureProduct ? 
            <ul className="grid">
                {featuredProducts.results && featuredProducts.results.map((product, index) => 
                    <li key={product.id} className="containerItem">
                        <img className="mainImage" src={product.data.mainimage.url} alt={product.data.mainimage.alt} title={product.data.name} />
                        <span className="productLabel">{product.data.name}</span>
                        <span className="productLabel">{product.data.category.slug}</span>
                        <span className="productLabel">{`$ ${product.data.price}`}</span>
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
        : <h1>Productos cargandose</h1>}

        <Link to="/products">
            <button className="btn">Ver todos los productos</button>
        </Link>

            </div>
        </React.Fragment>    
        )
}

export default Banner;