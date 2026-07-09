import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import loogo from "../../../assets/loogo.webp";
import { Link } from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
const NAV_ITEMS = [
  {
    label: "About",
    dropdown: [
      { label: "About RS Choyal Group", path: "/about-rs-choyal-group" },
      { label: "About Director", path: "/director" },
      { label: "About Mavian Pro Miller", path: "/mavian" },
      { label: "About CSMT", path: "/mavian" },
      { label: "About Charge", path: "/mavian" },
    ],
  },
  {
    label: "Products and Services",
  },
  {
    label: "Technologies",
    dropdown: [
      { label: "Wonder Mill", path: "/technologies/WonderMill" },
      { label: "Wonder Miller", path: "/technologies/WonderMiller" },
      { label: "Neo Matic", path: "/technologies/NeoMatic" },
      { label: "Emery Stone Dresser", path: "/technologies/EmeryStoneDresser" },
      { label: "Floura", path: "/technologies/Floura" },
      { label: "iQuadra", path: "/technologies/IQuadra" },
    ],
  },
  {
  label: "Operations",
  path: "/operations",
  },
  { label: "Modules" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const dropdownTimer = useRef(null);

  // cleanup timer
  useEffect(() => {
    return () => clearTimeout(dropdownTimer.current);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileOpen(false);
        setMobileDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEnter = (label) => {
    clearTimeout(dropdownTimer.current);
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="navbar__topbar">
        <div className="navbar__topbar-inner">

          <div className="navbar__topbar-left">
            <a href="tel:18001801234" className="navbar__contact-link">
              <CallIcon/>
              <span>1800-180-1234</span>
            </a>

            <span>|</span>

            <a href="mailto:promiller@support.com" className="navbar__contact-link">
              <MailIcon/>
              <span>promiller@support.com</span>
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="navbar__topbar-right">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="navbar__topbar-social">
              <XIcon/>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="navbar__topbar-social">
              <FacebookIcon/>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="navbar__topbar-social">
              <InstagramIcon/>
            </a>
          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar__inner">

          <Link to="/" className="navbar__logo">
            <img src={loogo} alt="Logo" className="navbar__logo-image" />
          </Link>

         <nav className="navbar__nav">
  <ul className="navbar__list">
    {NAV_ITEMS.map((item) => (
      <li
        key={item.label}
        className="navbar__item"
        onMouseEnter={
          item.dropdown ? () => handleEnter(item.label) : undefined
        }
        onMouseLeave={item.dropdown ? handleLeave : undefined}
      >
        {item.dropdown ? (
          <>
            <button className="navbar__link" type="button">
              {item.label}
            </button>

            <ul
              className={`navbar__dropdown ${
                openDropdown === item.label
                  ? "navbar__dropdown--open"
                  : ""
              }`}
            >
              {item.dropdown.map((sub) => (
                <li key={sub.label}>
                  <Link to={sub.path} className="navbar__dropdown-link">
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : item.path ? (
          <Link to={item.path} className="navbar__link">
            {item.label}
          </Link>
        ) : (
          <button className="navbar__link" type="button">
            {item.label}
          </button>
        )}
      </li>
    ))}
  </ul>
</nav>

          {/* BURGER */}
          <button className="navbar__burger" onClick={() => setMobileOpen(v => !v)}>
            <span />
            <span />
            <span />
          </button>

        </div>

        <div className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}>
  <ul className="navbar__mobile-list">
    {NAV_ITEMS.map((item) => (
      <li key={item.label}>
        {item.dropdown ? (
          <>
            <button
              onClick={() =>
                setMobileDropdown(
                  mobileDropdown === item.label ? null : item.label
                )
              }
            >
              {item.label}
            </button>

            {mobileDropdown === item.label && (
              <ul>
                {item.dropdown.map((sub) => (
                  <li key={sub.label}>
                    <Link
                      to={sub.path}
                      className="navbar__dropdown-link"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileDropdown(null);
                      }}
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : item.path ? (
          <Link
            to={item.path}
            className="navbar__link"
            onClick={() => {
              setMobileOpen(false);
              setMobileDropdown(null);
            }}
          >
            {item.label}
          </Link>
        ) : (
          <button>{item.label}</button>
        )}
      </li>
    ))}
  </ul>
</div>
      </header>
    </>
  );
}
