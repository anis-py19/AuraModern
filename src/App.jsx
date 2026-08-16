import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Components/layout/Topbar";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import ScrollToTop from "./Components/layout/ScrollToTop";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Dentists from "./Pages/Dentists";
import Gallery from "./Pages/Gallery";
import Pricing from "./Pages/Pricing";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

// Icons & Data
import { FaWhatsapp } from "react-icons/fa";
import { clinicData } from "./data/clinicData";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FCFDFB] dark:bg-[#080d12] text-slate-900 dark:text-slate-100 selection:bg-emerald-800 selection:text-amber-300 transition-colors duration-300">
        <Topbar />
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dentists" element={<Dentists />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cases" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/appointment" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />

        {/* Floating Quick WhatsApp Floating Trigger Button */}
        <a
          href={`https://wa.me/${clinicData.contact.whatsapp.replace("+", "")}?text=Hello%20Aura%20Modern%20Dentistry,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-white/80"
          aria-label="Direct WhatsApp Chat"
        >
          <FaWhatsapp className="w-7 h-7" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}

export default App;
