import React, { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className={`left-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/" onClick={handleMenuClose}>
          Home
        </a>
        <a href="/about" onClick={handleMenuClose}>
          About
        </a>
        <a href="/authors" onClick={handleMenuClose}>
          Authors
        </a>
        <a href="/contact" onClick={handleMenuClose}>
          Contact
        </a>
      </div>
      <div className={`right-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="https://www.instagram.com">
          <img src="https://storage.googleapis.com/breakfast-ansh-and-dinner/instagram-logo.png" alt="Instagram" />
        </a>
        <a href="https://www.github.com">
          <img src="https://storage.googleapis.com/breakfast-ansh-and-dinner/github-logo.png" alt="GitHub" />
        </a>
      </div>
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isMenuOpen && (
        <div className={`menu-links ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
          <a href="/" onClick={handleMenuClose}>
            Home
          </a>
          <a href="/about" onClick={handleMenuClose}>
            About
          </a>
          <a href="/authors" onClick={handleMenuClose}>
            Authors
          </a>
          <a href="/contact" onClick={handleMenuClose}>
            Contact
          </a>
          <span>
            <a href="https://www.instagram.com">
              <img src="https://storage.googleapis.com/breakfast-ansh-and-dinner/instagram-logo.png" alt="Instagram" />
            </a>
            <a href="https://www.github.com">
              <img src="https://storage.googleapis.com/breakfast-ansh-and-dinner/github-logo.png" alt="GitHub" />
            </a>
          </span>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
