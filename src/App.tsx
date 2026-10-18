import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RouteMeta from "./components/RouteMeta";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import "./App.css";

function NotFound() {
  return <main className="placeholder-page"><div className="container placeholder-content"><span className="section-kicker">404 / NOT FOUND</span><h1>We couldn't find that page.</h1><p>The page may have moved or is not available yet.</p><a href="/" className="button-primary">Back to home</a></div></main>;
}

export default function App() {
  return <BrowserRouter><div className="app-shell"><RouteMeta /><Navbar /><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/products/:slug" element={<ProductPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes><Footer /></div></BrowserRouter>;
}
