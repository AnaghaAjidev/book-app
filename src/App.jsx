import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBook from './assets/components/AddBook'
import SearchBook from './assets/components/SearchBook'
import DeleteBook from './assets/components/DeleteBook'
import ViewAllBook from './assets/components/ViewAllBook'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddBook />} />
          <Route path="/search" element={<SearchBook />} />
          <Route path="/delete" element={<DeleteBook />} />
          <Route path="/view" element={<ViewAllBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
