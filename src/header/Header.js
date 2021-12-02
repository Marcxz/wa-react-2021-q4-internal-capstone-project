import "./Header.css"
import React, {useState} from 'react';
import { Link } from "react-router-dom"

export default function Header() {
    const [criterio, setCriterio] = useState("")
    const handleKeyPress = (event) => {
        setCriterio(document.getElementById('criterio').value)
    }

    
    return (
            <div className="container">
                <Link to="/home">
                    <img alt="logo_image" src="assets/logo.png" /> 
                </Link>
                <input id="criterio" className="searchInput" placeholder="Teclee los elementos a buscar" type="text" onKeyUpCapture={handleKeyPress}/>
                <Link className="linkSearch" to={`/search?q=${criterio}`}>
                    <button className="btn">Buscar Elementos</button>
                </Link>
            </div>
    )
}
