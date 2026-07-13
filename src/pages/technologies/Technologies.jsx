import "./TechPage.css";

import WonderMillImg from "../../assets/WonderMill.webp";
import WonderMillerImg from "../../assets/WonderMiller.webp";
import NeoMaticImg from "../../assets/NeoMatic.webp";
import EmeryImg from "../../assets/2013.png";
import FlouraImg from "../../assets/floura.webp";

const DATA = [
  {
    id: "wonder-mill",
    title: "Wonder Mill",
    image: WonderMillImg,
    desc: "Fully automatic digital stone flour mill (chakki) — the core hardware ProMiller installs in every partner mill, replacing manual chakki operation with precision digital control",
  },
  {
    id: "wonder-miller",
    title: "Wonder Miller",
    image: WonderMillerImg,
    desc: "A touch-screen control device for the Stone Flour Mill — the interface operators use to run, monitor, and adjust the mill in real time.",
  },
  {
    id: "miller-lite",
    title: "Miller Lite",
    image: NeoMaticImg,
    desc: "Touch-screen-enabled software that controls the complete plant — combining hardware, PLC, VFD, servo drives, and electrical panel into single-touch operation.",
  },
  {
    id: "dresser",
    title: "Automatic Stone Dresser Machine",
    image: EmeryImg,
    desc: "Automates the dressing (resurfacing) of emery stones — a job traditionally done by hand — cutting each groove in 3–4 minutes and extending stone life with far more consistency than manual work.",
  },
  {
    id: "support",
    title: "Choyal Support",
    image: FlouraImg,
    desc: "A web-enabled remote control and support system for Wonder Mills, allowing diagnostics and assistance without needing an engineer on-site.",
  },
];

export default function Technologies() {
  return (
    <div className="tech-page">
      <div className="tech-header">
        <h1>Our Six Patented Innovations</h1>
        <p>
          Since establishing India's first dedicated R&D centre for flour
          milling in 2012, RS Choyal Group has registered 6 patented
          technologies, each solving a real, recurring problem millers face.
        </p>
      </div>

      <div className="tech-grid">
        {DATA.map((item) => (
          <div className="tech-card" key={item.id}>
            <div className="tech-card-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="tech-card-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}