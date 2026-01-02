import { Link } from "react-router-dom"

export default function Nav()
{
    return(
        <nav className="nav-bar">
            <div className="logo">
                <img src="/images/brandlogo.png"></img>
            </div>
            <ul className="nav">
                <li><Link className="nav-text" to="/Home">Home</Link></li>
                <li><Link className="nav-text" to="/Product">Product</Link></li>
                <li><Link className="nav-text" to="/Contact">Contact</Link></li>
                <li><Link className="nav-text" to="/About">About</Link></li>
            </ul>
            <button className="btn-login">Login</button>
        </nav>
    )
}