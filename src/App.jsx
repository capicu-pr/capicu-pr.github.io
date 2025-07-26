import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import "./App.css";
import Products from "./pages/Products";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <MobileMenu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
