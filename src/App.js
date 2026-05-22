import Header from "./Header";
import Home from  "./Home";
import About from  "./About";
import Skill from  "./Skill";
import Project from  "./Project";
import Contact from  "./Contact";
import './App.css';
import Footer from "./Footer";

function App(){
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;