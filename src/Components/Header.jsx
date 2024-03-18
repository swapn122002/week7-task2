import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {clicked: false};
  handleClick = ()=>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className='NavBarItems'>
        <h1 className='navbar-logo'>Travel</h1>
        <div className="menu-icons" onClick={this.handleClick}>
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          
        </div>
        <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
          <li>
            <Link to="/" className="nav-links"><i className="fa-solid fa-house-user"></i>Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-links"><i className="fa-solid fa-circle-info"></i>About</Link>
          </li>
          <li>
            <Link to="/service" className="nav-links"><i className="fa-solid fa-briefcase"></i>Service</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links"><i className="fa-solid fa-address-book"></i>Contact</Link>
          </li>
          <li>
            <Link to="/signup" className="nav-links-mobile">Sign up</Link>
          </li>
          <button>Sign Up</button>
        </ul>
      </nav>
    )
  }
}

export default Header;