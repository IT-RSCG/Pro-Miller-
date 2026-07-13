import { useState } from "react";
import "./Services.css";
import product1 from "../../assets/WonderMill.webp";
import product2 from "../../assets/quadra.webp";
import product3 from "../../assets/NeoMatic.webp";
import product4 from "../../assets/WonderMiller.webp";
import product5 from "../../assets/new4.webp";
import product6 from "../../assets/AMC.jpg";
import product7 from "../../assets/saas.jpg";

const products = [
  {
    id: 1,
    name: "Wonder Mill — Core Upgrade",
    image: product1,
    description: "The flagship product: a fully automatic digital stone flour mill that replaces your existing chakkis. Installed at zero upfront cost under the ProMiller partnership, it's the foundation every mill starts with — choose from 10–7, 10–8, 10–10, or 10–12 configurations based on your output and power-saving goals.",
  },
  {
    id: 2,
    name: "iQuadra — Maximum Power Saving",
    image: product2,
    description: "For mills prioritizing efficiency above all, iQuadra is Choyal's most advanced digital stone mill, delivering up to 40% power savings with intelligent grain feeding, data logging, and hydraulic auto-pressure control."
  },
  {
    id: 3,
    name: "Miller Lite — Full Plant Control",
    image: product3,
    description: "Touch-screen software that runs your entire plant — hardware, PLC, VFD, servo drives, and electrical panel — from a single touch. Ideal for mills that want centralized, one-point control."

  },
  {
    id: 4,
    name: "Wonder Miller — Smart Dashboard",
    image: product4,
    description:"The everyday interface for your team: monitor output, energy use, and alerts from a touch screen or mobile app, with role-based logins for operators, supervisors, and admins."

  },
  {
    id: 5,
    name: "Spares",
    image: product5,
    description:"Genuine WonderMill components, supplied directly so your system stays at rated performance without downtime or third-party guesswork."
  },
  {
    id: 6,
    name: "AMC (Annual Maintenance Contract)",
    image: product6,
    description: "Ongoing service, inspection, and calibration support built into the partnership — keeping your mill running at peak output for the life of the system."


  },
  {
    id: 7,
    name: "SaaS Layer",
    image: product7,
    description:"The cloud and connectivity backbone behind every installation: remote operation, live energy monitoring, automated safety alerts (alarm → remedy → shutdown), and MIS reporting — accessible from anywhere."


  },
];
function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-content">
        <h2>{product.name}</h2>

        <p className={expanded ? "expanded" : ""}>
          {product.description}
        </p>

        <button
          className="read-more-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
function Services() {
  return (
    <section className="products-section">
      <div className="container">
        <h1 className="section-title">Products & Services</h1>

        <p className="section-subtitle">
          ProMiller's product range gives you a clear path: start with the core
          WonderMill upgrade, add the digital tools that matter to you, and keep
          the system running with ongoing support.
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;