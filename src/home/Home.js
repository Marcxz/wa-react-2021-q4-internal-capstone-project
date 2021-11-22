import "./Home.css"

import PropTypes from "prop-types"
import React from "react"
import { Slider } from "./slider/slider";
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="containerHome">
                <Slider />
            </div>
        )
    }
}

