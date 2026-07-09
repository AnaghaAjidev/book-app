import React from 'react'
import BookHeader from './BookHeader'

const AddBook = () => {
  return (
    <>
    <BookHeader />
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add Book</h2>

        <div className="row g-3">

          <div className="col-md-6">
            <label className="form-label">Book Code / ISBN</label>
            <input type="text" className="form-control" placeholder="Enter Book Code / ISBN" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" placeholder="Enter Title" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Author</label>
            <input type="text" className="form-control" placeholder="Enter Author Name" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Publisher</label>
            <input type="text" className="form-control" placeholder="Enter Publisher" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Category / Genre</label>
            <input type="text" className="form-control" placeholder="Enter Category" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Edition</label>
            <input type="text" className="form-control" placeholder="Enter Edition" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Number of Copies</label>
            <input type="number" className="form-control" placeholder="Enter Copies" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Price</label>
            <input type="number" className="form-control" placeholder="Enter Price" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Publication Year</label>
            <input type="number" className="form-control" placeholder="Enter Publication Year" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Shelf Location</label>
            <input type="text" className="form-control" placeholder="Enter Shelf Location" />
          </div>

          <div className="col-12 text-center mt-3">
            <button className="btn btn-success px-4">
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default AddBook