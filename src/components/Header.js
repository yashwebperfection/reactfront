import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header-main">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about-us">ABOUT US</Link></li>
                <li><Link to="/users">USERS</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/addpost">INSERT POST</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    );
}

export default Header;