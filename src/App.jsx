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
import { useLanguage } from "./context/LanguageContext";

function App() {
  const { language, t } = useLanguage();

  const whatsappMessage = encodeURIComponent(
    language === "fr"
      ? "Bonjour Clinique Aura Dentisterie Moderne, je souhaite obtenir des informations pour une consultation dentaire."
      : language === "ar"
      ? "مرحباً عيادة أورا لطب الأسنان، أود الاستفسار عن حجز موعد استشارة طبية."
      : "Hello Aura Modern Dentistry, I would like to inquire about a dental appointment."
  );

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen transition-colors duration-300">
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
k          </Routes>
        </div>

        <Footer />

        {/* Floating WhatsApp Button with RTL support */}
        <a
          href={`https://wa.me/${clinicData.contact.whatsapp.replace("+", "")}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-50 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-white/80"
          aria-label={t("common.chatWhatsApp")}
        >
          <FaWhatsapp className="w-7 h-7" />
          <span className="absolute right-full rtl:right-auto rtl:left-full mr-3 rtl:mr-0 rtl:ml-3 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800">
            {t("common.chatWhatsApp")}
          </span>
        </a>
      </div>
    </>
  );
}

export default App;
