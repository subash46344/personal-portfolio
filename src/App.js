import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navabr from "./Components/Navbar/Navabr";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <div>
      <Navabr />
      <Home />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
