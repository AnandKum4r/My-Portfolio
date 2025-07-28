import Dashbaord from "./Dashboard";
import Footer from "./Footer";
import Skills from "../skills/Skills";
import LatestWorks from "./LatestWorks";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <>
      <TopHeader />
      <Dashbaord />
      <LatestWorks />
      <Skills />
      <Footer />
    </>
  );
};

export default Header;
