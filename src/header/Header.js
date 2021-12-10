import "./Header.css"
import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import ShoppingCartIcon from "../home/shoppingCartIcon/ShoppingCartIcon";
export default function Header() {
    const navigate = useNavigate();
    const searchProduct = () => {
        navigate(`search?q=${document.getElementById('q').value}`)
    }
     return (
            <div className="container">
                <Link to="/home">
                    <img alt="logo_image" src="assets/logo.png" /> 
                </Link>
                <div className="containerSearch"> 
                    <input id="q" className="searchInput"  placeholder="Teclee los elementos a buscar" type="text"/>
                    <button className="btnSearch" onClick={()=>{searchProduct()}}>Buscar Elementos</button>
                </div>
               <ShoppingCartIcon />
            </div>
    )
}
