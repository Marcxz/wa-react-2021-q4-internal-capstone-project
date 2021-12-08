import React from "react";

const EcommerceContext = React.createContext({
    customer: {
        name: '',
        email: '',
        zipCode: '',
        notes: '',
    },
    setCustomer: () => {},
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