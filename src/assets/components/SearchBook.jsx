import React from 'react'
import BookHeader from './BookHeader'

const SearchBook = () => {
  return (
    <>
      <BookHeader />
      <div className="container mt-5">
        <div className="card p-4 shadow col-md-6 mx-auto">
          <h3 className="text-center mb-3">Search Book</h3>

          <label className="form-label">Book Code / ISBN</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Book Code / ISBN"
          />

          <button className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchBook