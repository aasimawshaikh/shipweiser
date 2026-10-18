import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<PlaceholderPage />} />
          <Route path="/services" element={<PlaceholderPage />} />
          <Route path="/insights" element={<PlaceholderPage />} />
          <Route path="/contact" element={<PlaceholderPage />} />
          <Route path="*" element={<PlaceholderPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}