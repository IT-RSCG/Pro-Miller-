import "./TechPage.css";
import WonderMillerImg from "../../assets/WonderMiller.webp";
export default function WonderMiller() {
  return (
    <div className="tech-page">

      <div className="tech-hero">
        <h1>Wonder Miller</h1>
        <p>Advanced milling automation solution for modern flour mills</p>
      </div>

      <div className="tech-container">

        <section className="tech-section">

          <div className="tech-text">

            <span className="badge">Innovation</span>

            <h2>Overview</h2>
            <p>
              Wonder Miller is a next-generation industrial milling system
              designed to transform traditional flour production into a fully
              automated, high-efficiency process with consistent output quality
              and precision control.
            </p>

            <div className="feature-tags">
              <span>Smart Automation</span>
              <span>High Efficiency</span>
              <span>Industrial Grade</span>
            </div>

          </div>

          <div className="tech-img">
            <div style={{ maxWidth: "280px", margin: "0 auto" }}>
              <img src={WonderMillerImg} alt="Wonder Miller Machine" />
            </div>
          </div>

        </section>

        <section className="highlights-grid">

          <div className="h-card">
            <div className="icon">⚙️</div>
            <h3>Smart Automation</h3>
            <p>Automated system ensures consistent grinding pressure and output quality.</p>
          </div>

          <div className="h-card">
            <div className="icon">⚡</div>
            <h3>High Efficiency</h3>
            <p>Optimized motor system reduces energy consumption while increasing output.</p>
          </div>

          <div className="h-card">
            <div className="icon">💎</div>
            <h3>Premium Output</h3>
            <p>Maintains grain quality with precise temperature and grinding control.</p>
          </div>

        </section>

        <section className="specs-section">

          <h2>Technical Specifications</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Specification</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Automation</td>
                  <td>Fully Automatic PLC System</td>
                </tr>
                <tr>
                  <td>Capacity</td>
                  <td>200–500 kg/hour</td>
                </tr>
                <tr>
                  <td>Motor Type</td>
                  <td>Energy Efficient Industrial Motor</td>
                </tr>
                <tr>
                  <td>Maintenance</td>
                  <td>Low Maintenance Design</td>
                </tr>
              </tbody>

            </table>
          </div>

        </section>

      </div>
    </div>
  );
}