import "./TechPage.css";
import EmeryImg from "../../assets/emerystonedresser.webp";

export default function EmeryStoneDresser() {
  return (
    <div className="tech-page">

      <div className="tech-hero">
        <h1>Emery Stone Dresser</h1>
        <p>Precision stone maintenance technology for enhanced milling performance</p>
      </div>

      <div className="tech-container">

       
        <section className="tech-section">

          
          <div className="tech-text">

            <span className="badge">Maintenance Tech</span>

            <h2>Overview</h2>
            <p>
              Emery Stone Dresser is an advanced maintenance solution designed
              to restore and maintain the sharpness and efficiency of grinding
              stones used in flour mills, ensuring consistent output quality.
            </p>

            <div className="feature-tags">
              <span>Precision Dressing</span>
              <span>Stone Longevity</span>
              <span>Efficiency Boost</span>
            </div>

          </div>

          
          <div className="tech-img">
            <div style={{ maxWidth: "280px", margin: "0 auto" }}>
              <img src={EmeryImg} alt="Emery Stone Dresser" />
            </div>
          </div>

        </section>

        <section className="highlights-grid">

          <div className="h-card">
            <div className="icon">⚙️</div>
            <h3>Automated Operation</h3>
            <p>Reduces manual intervention and ensures precise stone dressing.</p>
          </div>

          <div className="h-card">
            <div className="icon">🪨</div>
            <h3>Stone Efficiency</h3>
            <p>Restores grinding surface for improved milling output quality.</p>
          </div>

          <div className="h-card">
            <div className="icon">⏳</div>
            <h3>Longer Lifespan</h3>
            <p>Extends durability of grinding stones significantly.</p>
          </div>

        </section>

        <section className="specs-section">

          <h2>Technical Details</h2>

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
                  <td>Operation Type</td>
                  <td>Semi / Fully Automated</td>
                </tr>
                <tr>
                  <td>Compatibility</td>
                  <td>All Emery Stone Mills</td>
                </tr>
                <tr>
                  <td>Efficiency Boost</td>
                  <td>Up to 30% improvement</td>
                </tr>
                <tr>
                  <td>Maintenance</td>
                  <td>Low maintenance system</td>
                </tr>
              </tbody>

            </table>
          </div>

        </section>

      </div>
    </div>
  );
}