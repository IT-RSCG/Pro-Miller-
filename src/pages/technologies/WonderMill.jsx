import "./TechPage.css";
import WonderMillImg from "../../assets/WonderMill.webp";

export default function WonderMill() {
  return (
    <div className="tech-page">
      <div className="tech-hero">
        <h1>Wonder Mill</h1>
        <p>Next-generation intelligent milling system</p>
      </div>

      <div className="tech-container">
        <section className="tech-section">

       
          <div className="tech-text">
            <span className="badge">Innovation</span>

            <h2>Overview</h2>
            <p>
              Wonder Mill is a fully automated stone milling system designed to
              deliver high-efficiency flour production with consistent quality.
              It integrates modern engineering with traditional grinding principles
              to preserve nutritional value while maximizing output.
            </p>

            <div className="feature-tags">
              <span>Precision Milling</span>
              <span>Industrial Grade</span>
              <span>IoT Enabled</span>
            </div>
          </div>

      
          <div className="tech-img">
            <div className="img-backdrop"></div>
            <img src={WonderMillImg} alt="Wonder Mill" />
          </div>

        </section>

      
        <section className="highlights-grid">

          <div className="h-card">
            <div className="icon">⚙️</div>
            <h3>Smart Automation</h3>
            <p>
              Real-time sensor monitoring adjusts grinding pressure automatically
              to prevent overheating.
            </p>
          </div>

          <div className="h-card">
            <div className="icon">🔋</div>
            <h3>Eco-Efficient</h3>
            <p>
              High-torque motors reduce energy consumption by up to 30% compared
              to traditional mills.
            </p>
          </div>

          <div className="h-card">
            <div className="icon">💎</div>
            <h3>Premium Output</h3>
            <p>
              Maintains cool grinding temperatures to preserve natural oils and nutrients
              in the grain.
            </p>
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
                  <td>Stone Material</td>
                  <td>Natural Emery / High-Density Composite</td>
                </tr>
                <tr>
                  <td>Production Capacity</td>
                  <td>200 - 500 kg/hour (Variable)</td>
                </tr>
                <tr>
                  <td>Power Rating</td>
                  <td>7.5 HP - 15 HP Three Phase</td>
                </tr>
                <tr>
                  <td>Automation Level</td>
                  <td>Fully Automatic (PLC Controlled)</td>
                </tr>
              </tbody>
            </table>

          </div>
        </section>

      </div>
    </div>
  );
}