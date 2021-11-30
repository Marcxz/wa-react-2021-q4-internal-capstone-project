import "./Header.css"

import React from 'react';
import { Link } from "react-router-dom"

export default function Header() {
    return (
            <div className="container">
                <Link to="/home">
                    <img alt="logo_image" src="assets/logo.png" /> 
                </Link>
                <input id="criterio" disabled={true} className="searchInput" placeholder="Teclee los elementos a buscar" type="text" />
                <button className="btn" disabled={true}>Buscar Elementos</button>
            </div>
    )
}
