function Header() {
  return (
    <div class="head">
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
        <button> <a href="#contact">Hire Me</a></button>
         <button> <a href="tel:+918109836169">Call Me</a></button>
      </div>
    </div>
  );
}
export default Header;