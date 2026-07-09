import React, { useEffect } from "react";
import "./RSChoyal.css";

import industrialist from "../../assets/industrialist.webp";
import innovator from "../../assets/innovator.webp";
import author from "../../assets/author.webp";
import motivator from "../../assets/motivator.webp";
import backgroundFactory from "../../assets/2025.webp";

export default function Director() {
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

    const sections = document.querySelectorAll(".rs-theater-frame");
    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const profiles = [
    {
      role: "Industrialist",
      image: industrialist,
      lines: [
        "Built a globally recognized industrial ecosystem in flour milling, engineering, and food processing technologies.",
        "Established scalable manufacturing systems and expanded operations across multiple countries, making the Choyal Group a trusted global name."
      ]
    },
    {
      role: "Innovator",
      image: innovator,
      lines: [
        "Introduced breakthrough technologies such as Wonder Mill, automated milling systems, and energy-efficient grinding solutions.",
        "Focused on reducing operational costs, increasing efficiency, and bringing digital transformation into traditional milling processes."
      ]
    },
    {
      role: "Author",
      image: author,
      lines: [
        "Authored books on leadership, personality development, motivation, and industrial growth.",
        "His writings focus on discipline, mindset transformation, and practical success principles for students, entrepreneurs, and professionals."
      ]
    },
    {
      role: "Motivator",
      image: motivator,
      lines: [
        "A widely respected speaker and mentor who has addressed thousands of students, entrepreneurs, and industry professionals across India and abroad.",
        "His seminars focus on mindset building, leadership development, and unlocking human potential."
      ]
    }
  ];

  return (
    <div className="rs-theater-wrapper" style={{ "--factory-src": `url(${backgroundFactory})` }}>
      <main className="rs-theater-main-content">
        {profiles.map((profile, index) => (
          <section key={profile.role} className="rs-theater-frame">
            <div className="rs-theater-container">
              <div className={`rs-theater-grid ${index % 2 !== 0 ? "is-reversed" : ""}`}>
                <div className="rs-theater-image-side large-view">
                  <img
                    src={profile.image}
                    alt={profile.role}
                    className="rs-theater-big-photo"
                  />
                </div>

                <div className="rs-theater-text-side">
                  <span className="rs-theater-tagline">ABOUT OUR DIRECTOR</span>
                  <h2 className="rs-theater-heading">{profile.role}</h2>
                  <div className="rs-theater-paragraphs">
                    {profile.lines.map((textLine, lineIdx) => (
                      <p key={lineIdx}>{textLine}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="rs-theater-impact">
          <div className="rs-theater-container">
            <div className="rs-impact-grid">
              <div className="rs-impact-card">
                <h3>1992</h3>
                <p>Joined Choyal Group</p>
              </div>
              <div className="rs-impact-card">
                <h3>Global</h3>
                <p>Industry Expansion</p>
              </div>
              <div className="rs-impact-card">
                <h3>Innovation</h3>
                <p>Core Philosophy</p>
              </div>
              <div className="rs-impact-card">
                <h3>Leadership</h3>
                <p>Industry Influence</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
