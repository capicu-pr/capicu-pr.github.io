import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import MobileOnly from "./components/MobileOnly";
import "./App.css";
import Products from "./pages/Products";
import EnMedio from "./pages/EnMedio";
import Privacy from "./pages/Privacy";

export default function App() {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Desktop breakpoint
    };

    // Check on mount
    checkScreenSize();

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // If mobile, show only the mobile page
  if (isMobile) {
    return <MobileOnly />;
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar onOpenProjectModal={() => setShowProjectModal(true)} />
        <MobileMenu />
        <main>
          <Routes>
            <Route path="/" element={<Home showProjectModal={showProjectModal} setShowProjectModal={setShowProjectModal} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/enmedio" element={<EnMedio showProjectModal={showProjectModal} setShowProjectModal={setShowProjectModal} />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
