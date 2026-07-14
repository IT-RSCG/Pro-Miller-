import { useState } from "react";
import "./TechPage.css";
import product1 from "../../assets/WonderMill.webp";
import product2 from "../../assets/WonderMiller.webp";
import product3 from "../../assets/wondermiller.png";
import product4 from "../../assets/emerystonedresser.png";
import product5 from "../../assets/new4.webp";
import banner from "../../assets/WonderMill.webp";

const products = [
  {
    id: 1,
    name: "Wonder Mill",
    image: product1,
    description: "Fully automatic digital stone flour mill (chakki) — the core hardware ProMiller installs in every partner mill, replacing manual chakki operation with precision digital control.",
  },
  {
    id: 2,
    name: "WonderMiller",
    image: product2,
    description: "A touch-screen control device for the Stone Flour Mill — the interface operators use to run, monitor, and adjust the mill in real time."

  },
  {
    id: 3,
    name: "Miller Lite",
    image: product3,
    description: "Touch-screen-enabled software that controls the complete plant — combining hardware, PLC, VFD, servo drives, and electrical panel into single-touch operation."

  },
  {
    id: 4,
    name: "Automatic Stone Dresser Machine",
    image: product4,
    description: "Automates the dressing (resurfacing) of emery stones — a job traditionally done by hand — cutting each groove in 3–4 minutes and extending stone life with far more consistency than manual work."

  },
  {
    id: 5,
    name: "Choyal Support",
    image: product5,
    description: "A web-enabled remote control and support system for Wonder Mills, allowing diagnostics and assistance without needing an engineer on-site."


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
      <div className="tech-hero">
  <img src={banner} alt="Patented Innovations" />

  <div className="tech-overlay">
    <span className="tech-tag">
      PATENTED TECHNOLOGY
    </span>

    <h1>Our 6 Patented Innovations</h1>

    <p>
      Since establishing India's first dedicated R&D centre for flour milling in
      2012, RS Choyal Group has registered 6 patented technologies, each solving
      a real, recurring problem millers face.
    </p>
  </div>
</div>
      <div className="container">
        

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