import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="head">
        <div className="logo">
          <span className="vikas">Vikas</span>.dev
        </div>
        <div className="menu">
          <a href="#home">HOME</a> 
          <a href="#about">ABOUT US</a>
          <a href="#skill">SKILL</a>
          <a href="#projects">PROJECT</a>
          <a href="#contact">CONTACT US</a>
        </div>
        <div className="btn">
          <button><a href="#contact">Hire Me</a></button>
          <button><a href="tel:+918109836169">Call Me</a></button>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-logo"><span className="vikas">Vikas</span>.dev</span>
          <button className="close-btn" onClick={closeMenu}>✕</button>
        </div>
        <nav className="mobile-nav">
          <a href="#home" onClick={closeMenu}>HOME</a>
          <a href="#about" onClick={closeMenu}>ABOUT US</a>
          <a href="#skill" onClick={closeMenu}>SKILL</a>
          <a href="#projects" onClick={closeMenu}>PROJECT</a>
          <a href="#contact" onClick={closeMenu}>CONTACT US</a>
        </nav>
        <div className="mobile-buttons">
          <button className="mobile-btn hire-btn"><a href="#contact" onClick={closeMenu}>Hire Me</a></button>
          <button className="mobile-btn call-btn"><a href="tel:+918109836169">Call Me</a></button>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}
export default Header;