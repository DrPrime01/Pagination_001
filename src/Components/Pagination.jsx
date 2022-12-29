import React from 'react'

function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const numbers = pageNumbers.map(number => {
        return (
            <li key={number} className="page-item"><a href='#' className='page-link' onClick={() => paginate(number)}>{number}</a></li>
        )
    })
  return (
    <div>
      <ul className='pagination'>
        {numbers}
      </ul>
    </div>
  )
}

export default Pagination
