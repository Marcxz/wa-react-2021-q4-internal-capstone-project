import './Pagination.css'
import { React } from 'react'

function Pagination(products) {
    return (
        <div className="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#">&raquo;</a> 
        </div>
    )
}

export default Pagination;