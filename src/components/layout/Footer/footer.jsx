import "./footer.css";
import logo from "../../../assets/logo1.webp";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__column">
          <h2>Promiller</h2>
          <p>
            Delivering advanced flour milling solutions with innovation,
            reliability, and engineering excellence. Empowering businesses
            with world-class milling technology.
          </p>
        </div>

        <div className="footer__column">
          <h3>Quick Links</h3>
          <ul>
            <li>Products</li>
            <li>Services</li>
            <li>Technologies</li>
            <li>Operations</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Services</h3>
          <ul>
            <li>Turnkey Flour Mills</li>
            <li>Plant Automation</li>
            <li>Consultancy</li>
            <li>Maintenance</li>
            <li>Training</li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Newsletter</h3>

          <p>
            Subscribe to receive updates, insights and upcoming industry
            innovations from Promiller.
          </p>

          <form className="footer__form">
            <input
              type="email"
              placeholder="Enter your email"
            />
            <button type="submit">
              Subscribe Now
            </button>
          </form>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="footer__copyright">
          © Copyright Promiller. All Rights Reserved.
        </div>
        <div className="footer__logo">
            <img src={logo} alt="Promiller Logo" />
          </div>
      </div>
    </footer>
  );
}
