import "./App.css";
import Navbars from "./components/Navbars";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Protfolio from "./components/Protfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    
    <div>
        <Navbars />
        <Home/>
        <SocialLinks/>
        <About/>
        <Protfolio/>
        <Experience/>
        <Contact/>
    </div>
   
  );
}

export default App;
