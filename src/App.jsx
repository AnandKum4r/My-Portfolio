import TopHeader from "./components/TopHeader";
import Dashbaord from "./components/Dashboard";
import LatestWorks from "./components/LatestWorks";
import Skills from "./skills/Skills";
import Footer from "./components/Footer";
import Education from "./education/Education";
import About from "./about/About";
import Certificates from "./certificates/Certificates";
import Contact from "./contact/Contact";


const App = () => {
  return (
    <>
      <TopHeader />
      <Dashbaord />
      <LatestWorks />
      <Skills />
      <Education />
      <About />
      <Certificates/>
      <Contact/>
      <Footer />
    </>
  );
};

export default App;
