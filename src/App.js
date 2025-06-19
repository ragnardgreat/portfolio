import './App.css';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Contact from './Components/Contact';

function App() {

  window.addEventListener("scroll", () => {

    if (window.outerWidth < 992) {
      if (window.scrollY >= 0) {
        document.body.style.backgroundColor = "black";
        document.body.style.transition = ".8s ease"
      }
      if (window.scrollY >= 200) {
        document.body.style.backgroundColor = "rgb(43, 43, 43)";
        document.body.style.transition = ".8s ease"
      }
      if (window.scrollY >= 2100) {
        document.body.style.backgroundColor = "rgb(255, 255, 255)"
      }
      if (window.scrollY >= 5100) {
        document.body.style.backgroundColor = "rgb(43, 43, 43)"
      }
      if (window.scrollY >= 10000) {
        document.body.style.backgroundColor = "rgb(0, 0, 0)"
      }
    }
    else {
      if (window.scrollY >= 0) {
        document.body.style.backgroundColor = "black";
        document.body.style.transition = ".8s ease"
      }
      if (window.scrollY >= 700) {
        document.body.style.backgroundColor = "rgb(43, 43, 43)";
        document.body.style.transition = ".8s ease"
      }
      if (window.scrollY >= 1600) {
        document.body.style.backgroundColor = "rgb(255, 255, 255)"
      }
      if (window.scrollY >= 4000) {
        document.body.style.backgroundColor = "rgb(43, 43, 43)"
      }
      if (window.scrollY >= 5500) {
        document.body.style.backgroundColor = "rgb(0, 0, 0)"
      }
    }



  })


  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Quicksand:wght@300..700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital@0;1&display=swap');
      </style>
      <div id="homePageContainer">
        <LandingPage />
        <Navbar />
        <AboutMe />
        <Projects />
        <Skills id="skills" /><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Contact />
      </div>
    </>
  );
}

export default App;
