import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navcontainer">
            <span className="logo">Jeevabooking</span>
            <div className="navitem">
                <button className="navbutton">Register</button>
                <button className="navbutton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar