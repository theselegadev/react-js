import './App.css'

// 1- config react router
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {
  return (
    <div className='App'>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        <SearchForm/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/company' element={<Navigate to="/about"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
