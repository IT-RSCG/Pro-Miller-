import "./TechPage.css";
import QuadraImg from "../../assets/quadra.webp";

export default function IQuadra() {
  return (
    <div className="tech-page">

    
      <div className="tech-hero">
        <h1>iQuadra</h1>
        <p>Multi-functional intelligent milling system for advanced processing</p>
      </div>

      <div className="tech-container">

       
        <section className="tech-section">

   
          <div className="tech-text">

            <span className="badge">Smart Milling</span>

            <h2>Overview</h2>
            <p>
              iQuadra is a high-performance multi-stage milling system designed
              for advanced grain processing with intelligent automation, ensuring
              consistent output quality and operational efficiency.
            </p>

            <div className="feature-tags">
              <span>Multi-Stage Grinding</span>
              <span>Smart Control</span>
              <span>High Efficiency</span>
            </div>

          </div>

          <div className="tech-img">
            <div style={{ maxWidth: "280px", margin: "0 auto" }}>
              <img src={QuadraImg} alt="iQuadra Machine" />
            </div>
          </div>

        </section>

        <section className="highlights-grid">

          <div className="h-card">
            <div className="icon">⚙️</div>
            <h3>Multi-Stage System</h3>
            <p>Advanced grinding stages ensure refined and uniform output quality.</p>
          </div>

          <div className="h-card">
            <div className="icon">🧠</div>
            <h3>Smart Automation</h3>
            <p>AI-based control system adjusts performance in real time.</p>
          </div>

          <div className="h-card">
            <div className="icon">🏭</div>
            <h3>Industrial Scale</h3>
            <p>Designed for large-scale production and continuous operation.</p>
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
                  <td>Multi-Stage Intelligent Mill</td>
                </tr>
                <tr>
                  <td>Automation</td>
                  <td>Fully Automatic PLC Controlled</td>
                </tr>
                <tr>
                  <td>Efficiency</td>
                  <td>High Output Optimization</td>
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