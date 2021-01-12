import React from 'react';
import './Pagination.css';



const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i); //correct amount of page numbers
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="pag__button">
                            <a href="!#" className="page-link">
                                {number}
                            </a>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;





