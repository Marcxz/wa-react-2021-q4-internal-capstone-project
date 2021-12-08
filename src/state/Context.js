import React from "react";

const EcommerceContext = React.createContext({
    cart: [],
    setCartProduct: () => {},
    removeCartProduct: () => {},
    quantityCart: 0,
    setQuantityCart: () => {},
    totalCart: 0,
    setTotalCart: () => {},
    banners: {},
    categories: {},
    products: {},
});

export default EcommerceContext;