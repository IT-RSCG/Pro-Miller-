import "./TechPage.css";
import FlouraImg from "../../assets/floura.webp";

export default function Floura() {
  return (
    <div className="tech-page">

      <div className="tech-hero">
        <h1>Floura</h1>
        <p>Smart flour processing system for precision grinding and quality output</p>
      </div>

      <div className="tech-container">

    
        <section className="tech-section">

          <div className="tech-text">

            <span className="badge">Processing Tech</span>

            <h2>Overview</h2>
            <p>
              Floura is an advanced flour processing system designed for
              precision grinding, improved nutritional retention, and consistent
              flour quality for industrial and commercial milling applications.
            </p>

            <div className="feature-tags">
              <span>Fine Grinding</span>
              <span>Hygienic Process</span>
              <span>Energy Efficient</span>
            </div>

          </div>

          <div className="tech-img">
            <div style={{ maxWidth: "280px", margin: "0 auto" }}>
              <img src={FlouraImg} alt="Floura System" />
            </div>
          </div>

        </section>

        <section className="highlights-grid">

          <div className="h-card">
            <div className="icon">🌾</div>
            <h3>Fine Grinding</h3>
            <p>Ensures ultra-smooth and uniform flour texture output.</p>
          </div>

          <div className="h-card">
            <div className="icon">🧼</div>
            <h3>Hygienic Processing</h3>
            <p>Closed system design prevents contamination during processing.</p>
          </div>

          <div className="h-card">
            <div className="icon">⚡</div>
            <h3>Energy Efficient</h3>
            <p>Optimized power usage reduces operational cost significantly.</p>
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
                  <td>System Type</td>
                  <td>Automated Flour Processing Unit</td>
                </tr>
                <tr>
                  <td>Output Quality</td>
                  <td>Fine / Medium Adjustable Grinding</td>
                </tr>
                <tr>
                  <td>Efficiency</td>
                  <td>High Energy Optimization</td>
                </tr>
                <tr>
                  <td>Maintenance</td>
                  <td>Low Maintenance System</td>
                </tr>
              </tbody>

            </table>
          </div>

        </section>

      </div>
    </div>
  );
}