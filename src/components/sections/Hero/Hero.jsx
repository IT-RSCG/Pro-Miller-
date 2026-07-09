// import React, { useState, useEffect, useRef } from "react";
// import "./Hero.css";
// import heroVideo from "./assets/choyal.MP4";
// import vloogo from "./assets/vloogo.png";
// import logo1 from "./assets/logo1.png";
// import factor from "./assets/factor.png";

// const STATS_DATA = [
//   { target: 265, suffix: "+", label: "Turnkey Projects" },
//   { target: 7, suffix: "+", label: "Patented Products" },
//   { target: 35, suffix: "+", label: "Countries Covered" },
//   { target: 42, suffix: "+", label: "Innovative Technologies" },
// ];

// // Sub-component that accepts the animation trigger signal from parent
// function StatCounterItem({ target, suffix, label, shouldAnimate }) {
//   const [count, setCount] = useState(0);
//   const animatedRef = useRef(false);

//   useEffect(() => {
//     // Only run the animation if the parent says it's time, and we haven't already run it
//     if (shouldAnimate && !animatedRef.current) {
//       animatedRef.current = true;
//       const duration = 2000; // 2 seconds
//       const startTime = performance.now();

//       const animate = (currentTime) => {
//         const elapsedTime = currentTime - startTime;
//         const progress = Math.min(elapsedTime / duration, 1);
//         const easeOutProgress = progress * (2 - progress);

//         setCount(Math.floor(easeOutProgress * target));

//         if (progress < 1) {
//           requestAnimationFrame(animate);
//         } else {
//           setCount(target);
//         }
//       };

//       requestAnimationFrame(animate);
//     }
//   }, [shouldAnimate, target]);

//   return (
//     <div className="hero__stat-col">
//       <h2>
//         {shouldAnimate ? count : 0}{suffix}
//       </h2>
//       <p>{label}</p>
//     </div>
//   );
// }

// export default function Hero() {
//   const [videoReady, setVideoReady] = useState(false);
//   const [globalStatsAnimated, setGlobalStatsAnimated] = useState(false);
//   const statsSectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//           setGlobalStatsAnimated(true);
//           // The crucial fix: Disconnect the observer immediately so it can never trigger again!
//           if (statsSectionRef.current) {
//             observer.unobserve(statsSectionRef.current);
//           }
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (statsSectionRef.current) {
//       observer.observe(statsSectionRef.current);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <section id="top" className="hero" aria-label="Featured machinery">
//       <div className="hero__frame">
//         <div
//           className={`hero__video-fallback ${
//             videoReady ? "hero__video-fallback--hide" : ""
//           }`}
//           style={{ backgroundImage: `url(${factor})` }}
//         />

//         {/* Video */}
//         <video
//           className="hero__video"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           onCanPlay={() => setVideoReady(true)}
//         >
//           <source src={heroVideo} type="video/MP4" />
//         </video>

//         <div className="hero__overlay">

//           {/* LOGO WRAPPER */}
//           <div className="hero__logo-wrapper">
//             <img
//               src={vloogo}
//               alt="Choyal Logo"
//               className="hero__video-logo hero__video-logo--left"
//             />
//             <img
//               src={logo1}
//               alt="Secondary Logo"
//               className="hero__video-logo hero__video-logo--right"
//             />
//           </div>

//           <div className="hero__content">
//             <h1 className="hero__title">
//               OVER 60 YEARS OF EXPERIENCE IN MILLING TECHNOLOGY
//             </h1>

//             <p className="hero__subtitle">
//               MARKET LEADING RANGE, QUALITY AND CHOICE
//             </p>

//             <button className="hero__btn" type="button">
//               KNOW MORE
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* RENDER STATS WITH A GLOBAL PARENT REF */}
//       <div ref={statsSectionRef} className="hero__stats">
//         {STATS_DATA.map((stat, index) => (
//           <StatCounterItem
//             key={index}
//             target={stat.target}
//             suffix={stat.suffix}
//             label={stat.label}
//             shouldAnimate={globalStatsAnimated}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

import heroVideo from "../../../assets/choyal.mp4";
import vloogo from "../../../assets/vloogo.webp";
import logo1 from "../../../assets/logo1.webp";
import factor from "../../../assets/factor.webp";

const STATS_DATA = [
  { target: 265, suffix: "+", label: "Turnkey Projects" },
  { target: 7, suffix: "+", label: "Patented Products" },
  { target: 35, suffix: "+", label: "Countries Covered" },
  { target: 42, suffix: "+", label: "Technologies" },
];

// COUNTER COMPONENT
function StatCounter({ target, suffix, label, animate }) {
  const [count, setCount] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!animate || done.current) return;

    done.current = true;

    const duration = 1800;
    const start = performance.now();

    const run = (t) => {
      const progress = Math.min((t - start) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(run);
      else setCount(target);
    };

    requestAnimationFrame(run);
  }, [animate, target]);

  return (
    <div className="hero__stat-col">
      <h2>
        {count}
        {suffix}
      </h2>
      <p>{label}</p>
    </div>
  );
}

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      {/* VIDEO */}
      <div className="hero__frame">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={factor}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* OVERLAY TEXT */}
        <div className="hero__overlay">
          {/* LOGOS */}
          <div className="hero__logo-wrapper">
            <img src={vloogo} alt="logo" className="logo-left" />
            <img src={logo1} alt="logo" className="logo-right" />
          </div>

          {/* CENTER CONTENT */}
          <div className="hero__content">
            <h1>
              FLOUR MILLING WITHOUT THE INVESTMENT <br />
              SAVING WITHOUT THE HASSLE
            </h1>

            <p>MARKET LEADING RANGE, QUALITY AND CHOICE</p>

            <button className="hero__btn">KNOW MORE</button>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="hero__stats" ref={ref}>
        {STATS_DATA.map((s, i) => (
          <StatCounter key={i} {...s} animate={animate} />
        ))}
      </div>
    </section>
  );
}
