import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SkullAnimation from './SkullAnimation';
import MyNav from './MyNav'
import MyFooter from './MyFooter'
import Welcome from './Welcome'
import AllTheBooks from './AllTheBooks'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './NotFound'
import BookDetails from './BookDetails'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <BrowserRouter>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container>
        <SkullAnimation />
        <Welcome />
        <Routes>
          <Route path="/" element={<AllTheBooks searchQuery={searchQuery} />} />
          <Route path="/details/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <MyFooter />
    </BrowserRouter>
  )
}

export default App
