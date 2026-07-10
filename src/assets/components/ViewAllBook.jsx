import React, { useState } from 'react'
import BookHeader from './BookHeader'

const ViewAllBook = () => {
const [book,changeBooks] = useState ( [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", price: "₹399", img: "https://picsum.photos/200?1" },
  { id: 2, title: "Harry Potter", author: "J. K. Rowling", price: "₹699", img: "https://picsum.photos/200?2" },
  { id: 3, title: "The Hobbit", author: "J. R. R. Tolkien", price: "₹499", img: "https://picsum.photos/200?3" },
  { id: 4, title: "Atomic Habits", author: "James Clear", price: "₹599", img: "https://picsum.photos/200?4" },
  { id: 5, title: "Think and Grow Rich", author: "Napoleon Hill", price: "₹350", img: "https://picsum.photos/200?5" },
  { id: 6, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: "₹450", img: "https://picsum.photos/200?6" },
  { id: 7, title: "Wings of Fire", author: "A. P. J. Abdul Kalam", price: "₹300", img: "https://picsum.photos/200?7" },
  { id: 8, title: "Ikigai", author: "Héctor García", price: "₹550", img: "https://picsum.photos/200?8" },
  { id: 9, title: "The Psychology of Money", author: "Morgan Housel", price: "₹650", img: "https://picsum.photos/200?9" },
  { id: 10, title: "Deep Work", author: "Cal Newport", price: "₹520", img: "https://picsum.photos/200?10" }
]
 )


  return (
    <>
      <BookHeader />
      <div className="container mt-4">
        <div className="row g-4">
          {book.map((book) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={book.id}>
              <div className="card h-100 shadow">
                <img
                  src={book.img}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body text-center">
                  <h5>{book.title}</h5>
                  <p className="mb-1">{book.author}</p>
                  <h6 className="text-success">{book.price}</h6>

                  <button className="btn btn-primary w-100">
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ViewAllBook