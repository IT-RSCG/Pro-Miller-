import React, { useEffect } from "react";
import "./Mavian.css";

import WonderMillImg from "../../assets/WonderMill.webp";
import WonderMillerImg from "../../assets/WonderMiller.webp";
import mach from "../../assets/wm.webp";
import QuadraImg from "../../assets/quadra.webp";
import factoryBg from "../../assets/2025.webp";

export default function Mavian() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll(".mavian-scroll-section");
    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="mavian-scroll-container" style={{ "--factory-src": `url(${factoryBg})` }}>
      <main className="mavian-main-content">
        <section className="mavian-scroll-section split-layout">
          <div className="mavian-image-panel large-view">
            <img src={WonderMillImg} alt="Wonder Mill" />
          </div>
          <div className="mavian-premium-content">
            <h2>Revolutionizing Milling Industry</h2>
            <p>
              Mavian ProMiller integrates advanced milling technology with smart automation to modernize traditional flour mills,
              improving efficiency, scalability, and profitability.
            </p>
          </div>
        </section>

        <section className="mavian-scroll-section split-layout reverse">
          <div className="mavian-image-panel large-view">
            <img src={WonderMillerImg} alt="Wonder Miller" />
          </div>
          <div className="mavian-premium-content">
            <h2>Key Benefits</h2>
            <ul className="premium-list">
              <li>30-40% increase in production capacity</li>
              <li>Reduced labor dependency</li>
              <li>Lower electricity consumption</li>
              <li>Smart automated mill management</li>
              <li>Performance-based cost savings</li>
              <li>Scalable long-term growth model</li>
            </ul>
          </div>
        </section>

        <section className="mavian-scroll-section split-layout">
          <div className="mavian-image-panel large-view">
            <img src={mach} alt="Machinery" />
          </div>
          <div className="mavian-premium-content">
            <h2>Industry Challenges</h2>
            <ul className="premium-list">
              <li>Outdated chakki-based systems</li>
              <li>Low productivity efficiency</li>
              <li>High electricity costs</li>
              <li>Maintenance &amp; labor issues</li>
            </ul>
          </div>
        </section>

        <section className="mavian-scroll-section split-layout reverse">
          <div className="mavian-image-panel large-view">
            <img src={mach} alt="Machinery" />
          </div>
          <div className="mavian-premium-content">
            <h2>ProMiller Solution</h2>
            <ul className="premium-list">
              <li>Advanced technology upgrade</li>
              <li>30-40% efficiency improvement</li>
              <li>Reduced power consumption</li>
              <li>Connected smart mill network</li>
            </ul>
          </div>
        </section>

        <section className="mavian-scroll-section split-layout">
          <div className="mavian-image-panel large-view">
            <img src={mach} alt="Machinery" />
          </div>
          <div className="mavian-premium-content">
            <h2>How It Works</h2>
            <div className="workflow-container">
              <div className="flow-step">Mill</div>
              <div className="flow-arrow">&darr;</div>
              <div className="flow-step">Technology Upgrade</div>
              <div className="flow-arrow">&darr;</div>
              <div className="flow-step">Higher Output</div>
              <div className="flow-arrow">&darr;</div>
              <div className="flow-step">Lower Power Cost</div>
            </div>
          </div>
        </section>

        <section className="mavian-scroll-section split-layout reverse">
          <div className="mavian-image-panel large-view">
            <img src={QuadraImg} alt="iQuadra" />
          </div>
          <div className="mavian-premium-content">
            <h2>Business Model</h2>
            <ul className="premium-list">
              <li>Revenue sharing from production gains</li>
              <li>Performance-based monitoring (SaaS)</li>
              <li>Shared energy savings model</li>
              <li>AMC support &amp; maintenance</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
