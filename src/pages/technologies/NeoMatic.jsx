import "./TechPage.css";
import NeoMaticImg from "../../assets/NeoMatic.webp";

export default function NeoMatic() {
  return (
    <div className="tech-page">

      <div className="tech-hero">
        <h1>Neo Matic</h1>
        <p>Smart pneumatic conveying system for efficient material handling</p>
      </div>

      <div className="tech-container">

 
        <section className="tech-section">

       
          <div className="tech-text">

            <span className="badge">Innovation</span>

            <h2>Overview</h2>
            <p>
              Neo Matic is an advanced pneumatic conveying system designed for
              efficient transfer of flour, grains, and raw materials within
              industrial milling plants. It ensures dust-free, controlled, and
              energy-optimized material movement across the system.
            </p>

            <div className="feature-tags">
              <span>Dust Free</span>
              <span>Energy Efficient</span>
              <span>Smart Control</span>
            </div>

          </div>

          <div className="tech-img">
            <div
              style={{
                maxWidth: "260px",
                margin: "0 auto",
              }}
            >
              <img src={NeoMaticImg} alt="Neo Matic System" />
            </div>
          </div>

        </section>

    
        <section className="highlights-grid">

          <div className="h-card">
            <div className="icon">🌬️</div>
            <h3>Airflow Control</h3>
            <p>Automated pressure control ensures smooth material transfer.</p>
          </div>

          <div className="h-card">
            <div className="icon">⚡</div>
            <h3>Energy Saving</h3>
            <p>Optimized system reduces power consumption significantly.</p>
          </div>

          <div className="h-card">
            <div className="icon">🧼</div>
            <h3>Hygienic Transfer</h3>
            <p>Fully sealed system prevents dust and contamination.</p>
          </div>

        </section>


        <section className="specs-section">

          <h2>System Highlights</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Technology</td>
                  <td>Pneumatic Conveying System</td>
                </tr>
                <tr>
                  <td>Operation</td>
                  <td>Fully Automated</td>
                </tr>
                <tr>
                  <td>Efficiency</td>
                  <td>High Energy Optimization</td>
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