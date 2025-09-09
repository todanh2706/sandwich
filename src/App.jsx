import { Routes, Route, useLocation } from "react-router-dom";
import Product from "./pages/product";
import About from "./pages/about";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}