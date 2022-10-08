import NavBar from "./components/NavBar";
import "./App.css";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Header />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contactus" element={<ContactUs></ContactUs>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
