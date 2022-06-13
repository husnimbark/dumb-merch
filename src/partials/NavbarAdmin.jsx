import logo from '../assets/img/dumbmerch.small.png'
import {Link} from 'react-router-dom'
import "../assets/css/color.css"


export default function NavbarAdmin(){
    return(
    <nav className="navbar d-flex bg-dumbgrey">
      <div className="container bg-dumbgrey">
        <div className="navbar-brand bg-dumbgrey">
            <img className="w-50 bg-dumbgrey" src={logo} alt="logo-DumbMerch"/>
        </div>
     
        <div className="d-flex right-side bg-dumbgrey">
          <Link to="/complain" href="" className="nav-link text-white">Complain</Link>
          <Link to="/category" href='' className="nav-link text-white">Category</Link>
          <Link to="/products" href="" className="nav-link text-white me-md-5">Product</Link>
          <Link to="/login" href="" className="nav-link text-white me-md-5">Log Out</Link>
        </div>
      </div>
    </nav>
    )
}