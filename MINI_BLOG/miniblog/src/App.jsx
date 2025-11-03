import './App.css'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
