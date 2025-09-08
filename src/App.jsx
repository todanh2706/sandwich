import { Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import About from "./pages/about";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}