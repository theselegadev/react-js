import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
        <NavLink to="/" className={({isActive})=>(isActive ? "ativo" : "desativo")}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>(isActive ? "ativo" : "desativo")}>About</NavLink>
    </nav>
  )
}

export default Navbar