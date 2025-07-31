import TopHeader from "./components/TopHeader";
import Dashbaord from "./components/Dashboard";
import LatestWorks from "./components/LatestWorks";
import Skills from "./skills/Skills";
import Footer from "./components/Footer";
import Education from "./education/Education";

const App = () => {
  return (
    <>
      <TopHeader />
      <Dashbaord />
      <LatestWorks />
      <Skills />
      <Education/>
      <Footer />
    </>
  );
};

export default App;
