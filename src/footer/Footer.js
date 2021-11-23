import "./Footer.css"

import React from "react";

export class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <span>Ecommerce created during Wizeline’s Academy React Bootcamp</span>
            </div>        
        )
    }
}
