import './Pagination.css'
import { React } from 'react'

function Pagination(products) {
    return (
        <div className="pagination">
            <a href="/home">&laquo;</a>
            <a href="/home">1</a>
            <a href="/home">&raquo;</a> 
        </div>
    )
}

export default Pagination;