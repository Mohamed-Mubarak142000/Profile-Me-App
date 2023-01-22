import { Fragment } from "react";
import Navbar from "./component/navbar/Navbar";
import HomeComp from './component/homeComp/Home';
import About from "./component/About/About";
import Experience from "./component/Experince/Experince";
import Portofolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <Fragment>
     <Navbar />
     <HomeComp />
     <About />
     <Experience />
     <Portofolio />
     <Contact />
     <Footer />
    </Fragment>
  );
}

export default App;
