import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Recipe from "./pages/Recipe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Recipe />} path="/recipe/:id" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
