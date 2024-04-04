import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Github from "./Components/Github";
import Hamburger from "./Components/Hamburger";
import Nav from "./Components/Nav";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Hamburger />
                <Profile />
                <About />
                <Experience />
                <Github />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;