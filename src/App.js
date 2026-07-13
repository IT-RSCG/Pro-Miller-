import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/footer";
import SupportButton from "./components/layout/SupportButton/SupportButton";
import ScrollToTop from "./components/common/ScrollToTopButton";

import Home from "./pages/Home/Home";
import Products from "./components/sections/Products/Products";

import RSChoyal from "./pages/AboutRSChoyal/RSChoyal";
import Choyal from "./pages/Aboutchoyal/Choyal";
import Mavian from "./pages/AboutMavian/Mavian";
import Services from "./pages/ProductsServices/Services";
// import WonderMill from "./pages/technologies/WonderMill";
// import WonderMiller from "./pages/technologies/WonderMiller";
// import NeoMatic from "./pages/technologies/NeoMatic";
// import EmeryStoneDresser from "./pages/technologies/EmeryStoneDresser";
// import Floura from "./pages/technologies/Floura";
// import IQuadra from "./pages/technologies/IQuadra";
import Operations from "./pages/Operations/Operations";
import Technologies from "./pages/technologies/Technologies";
import CSMT from "./pages/CSMT/csmt";
import Charge from "./pages/Charge/charge"


export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mavian" element={<Mavian />} />
        <Route path="/products" element={<Products />} />
        <Route path="/director" element={<RSChoyal />} />
        <Route path="/about-rs-choyal-group" element={<Choyal />} />
        <Route path="/products-services" element={<Services />} />
        <Route path="/operations" element={<Operations />} />
        {/* <Route path="/technologies/WonderMill" element={<WonderMill />} />
        <Route path="/technologies/WonderMiller" element={<WonderMiller />} />
        <Route path="/technologies/NeoMatic" element={<NeoMatic />} />
        <Route
          path="/technologies/EmeryStoneDresser"
          element={<EmeryStoneDresser />}
        />
        <Route path="/technologies/Floura" element={<Floura />} />
        <Route path="/technologies/IQuadra" element={<IQuadra />} /> */}
       
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/csmt" element={<CSMT />} />
        <Route path="/charge" element={<Charge />} />

      </Routes>

      <Footer />
      <SupportButton />
    </>
  );
}
