import "./Header.css"

import React from 'react';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="container">
            <img alt="logo_image" src="assets/logo.png" /> 
            <input id="criterio" disabled={true} className="searchInput" placeholder="Teclee los elementos a buscar" type="text" />
            <button className="btn" disabled={true}>Buscar Elementos</button>
        </div>
        )
    }
}
