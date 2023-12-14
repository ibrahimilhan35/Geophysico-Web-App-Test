import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        {/* <hr /> */}
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        {/* <hr /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;