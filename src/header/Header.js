import "./Header.css"
import React from 'react';
import { Link } from "react-router-dom"

export default function Header() {
    return (
            <div className="container">
                <Link to="/home">
                    <img alt="logo_image" src="assets/logo.png" /> 
                </Link>
                <form method="get" action="/search">
                    <input name="q" className="searchInput"  placeholder="Teclee los elementos a buscar" type="text"/>
                    <button className="btnSearch" type="submit">Buscar Elementos</button>
                </form>
            </div>
    )
}
