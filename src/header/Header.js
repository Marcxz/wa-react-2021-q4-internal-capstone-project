import "./Header.css"

import React from 'react';

export default function Header({setIsProduct}) {
    
    const handleClickHeader = () => {
        setIsProduct(false)
    }

    return (
        <div className="container">
            <img alt="logo_image" onClick={handleClickHeader} src="assets/logo.png" /> 
            <input id="criterio" disabled={true} className="searchInput" placeholder="Teclee los elementos a buscar" type="text" />
            <button className="btn" disabled={true}>Buscar Elementos</button>
        </div>
    )
}
