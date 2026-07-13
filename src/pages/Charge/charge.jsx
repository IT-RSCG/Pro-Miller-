import React, { useEffect } from "react";
import "./charge.css";

import WonderMillImg from "../../assets/charge.png";

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
      { threshold: 0.15 },
    );

    const sections = document.querySelectorAll(".mavian-scroll-section");
    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <main className="mavian-main-content">
      <section className="mavian-scroll-section split-layout">
        <div className="mavian-image-panel">
          <img src={WonderMillImg} alt="Mavian ProMiller" />
        </div>

        <div className="mavian-premium-content">
          <span className="mavian-tag">ABOUT CHARGE</span>

          <h2>
            Choyal Hub for Agribusiness, Research, Growth & Entrepreneurship
          </h2>

          <p>
            CHARGE (Choyal Hub for Agribusiness, Research, Growth &
            Entrepreneurship) is the evolved form of CSMT (Choyal School of
            Milling Technology), established to create skilled professionals and
            entrepreneurs for the agribusiness and food processing industry. A
            CSR initiative of the R.S. Choyal Group, CHARGE operates on a
            no-profit, no-loss basis and is dedicated to bridging the gap
            between education, industry, and innovation through certified
            training, applied research, incubation, seminars, workshops, and
            on-the-job technical programs. Backed by the R.S. Choyal Group’s
            legacy of manufacturing since 1966 and exports since 1970, CHARGE is
            committed to advancing India’s agribusiness ecosystem by promoting
            skill-oriented technical education and sustainable industry growth
            from its training centre in Arjunpura, Ajmer, Rajasthan.
            <br />
            <span className="bold-text">Know more about CHARGE:</span>
            <a
              href="  https://charge.org.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "none" }}
            >
              https://charge.org.in
            </a>{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
