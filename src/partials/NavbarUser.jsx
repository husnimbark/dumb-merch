import logo from '../assets/img/dumbmerch.small.png'
import {Link} from 'react-router-dom'
import "../assets/css/color.css"


export default function NavbarHome(){
    return(
        <nav className="navbar bg-dumbgrey">
        <div className="container bg-dumbgrey">
          <div className="navbar-brand bg-dumbgrey">
              <img className="w-50 bg-dumbgrey" src={logo} alt="logo-DumbMerch"/>
          </div>
       
          <div className="d-flex right-side bg-dumbgrey">
            <Link to="/complain" href="" className="nav-link text-white">Complain</Link>
            <Link to="/profile/0" href="" className="nav-link text-white me-md-5">Profile</Link>
            <Link to="/login" href="" className="nav-link text-white me-md-5">Log Out</Link>
          </div>
        </div>
      </nav>
    )
}