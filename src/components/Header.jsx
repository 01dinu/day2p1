import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import custom CSS for any specific styles

const Header = () => (
  <>
    <div className="topbar">
      <div className="topbar-content">
        <div className="topbar-left">
          <div className="topbar-item">
            <i className="fas fa-phone topbar-icon"></i>
            <span>(225) 555-0118</span>
          </div>
          <div className="topbar-item">
            <i className="fas fa-envelope topbar-icon"></i>
            <span>micehlle.rivera@example.com</span>
          </div>
        </div>
        <div className="topbar-center">
          <span className="topbar-text">Follow Us and get a chance to win 80% off</span>
        </div>
        <div className="topbar-right">
          <span className="follow-text">Follow Us:</span>
          <div className="social-icons">
            <i className="fab fa-instagram social-icon cursor-pointer"></i>
            <i className="fab fa-youtube social-icon cursor-pointer"></i>
            <i className="fab fa-facebook social-icon cursor-pointer"></i>
            <i className="fab fa-twitter social-icon cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>

    <header className="header">
      <nav className="nav">
        <div className="logo">BrandName</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <Link to="/login" className="link margin-left">Login / Register</Link>
          <div className="search-cart-heart">
            <i className="fas fa-search icon-spacing"></i>
            <i className="fas fa-shopping-cart icon-spacing"></i>
            <i className="fas fa-heart icon-spacing"></i>
          </div>
        </div>
      </nav>
    </header>
  </>
);

export default Header;
