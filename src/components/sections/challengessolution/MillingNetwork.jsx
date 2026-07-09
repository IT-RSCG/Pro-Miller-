import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MillingNetwork.css";

const networkData = [
  {
    id: 1,
    challenge: "Dependence on outdated chakki technology",
    solution: "Upgrade to advanced, high-performance milling technology",
    color: "#0ea5e9", 
    icon: "⚙️"
  },
  {
    id: 2,
    challenge: "High electricity consumption leads to increased costs",
    solution: "Reduce power consumption through improved efficiency",
    color: "#eab308", 
    icon: "⚡"
  },
  {
    id: 3,
    challenge: "Unconsistent productivity and inefficient operations",
    solution: "Integrate into a connected, scalable milling network",
    color: "#a855f7", 
    icon: "🌐"
  },
  {
    id: 4,
    challenge: "Labour cost & emery stone maintenance",
    solution: "Achieve a 30–40% increase in structural savings",
    color: "#22c55e", 
    icon: "💰"
  }
];

export default function MillingNetwork() {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section className="network-section">
      <div className="network-container">
        
        <div className="network-header">
          <h2>Turning Challenges into Bottom-Line Savings</h2>
        </div>

        <div className="network-grid">
          
          {/* Left Column: Challenges */}
          <div className="network-col challenges-side">
            <h3>The Challenges</h3>
            {networkData.map((node) => (
              <div
                key={node.id}
                className={`network-node challenge-card ${activeNode === node.id ? "active-challenge" : ""}`}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="node-indicator crimson-dot"></div>
                <p>{node.challenge}</p>
              </div>
            ))}
          </div>

          {/* Middle Column: Dynamic SVG Engine */}
          <div className="network-center">
            <svg viewBox="0 0 200 300" className="circuit-board">
              
              {/* Layer 1 (Bottom): Dynamic Circuit Paths rendered first */}
              {[40, 110, 190, 260].map((yPos, index) => {
                const isCurrent = activeNode === index + 1;
                return (
                  <g key={index}>
                    {/* Left wire to Hub */}
                    <path d={`M 15 ${yPos} L 60 ${yPos} L 100 150`} className="circuit-wire" />
                    {/* Hub to Right wire */}
                    <path d={`M 100 150 L 140 ${yPos} L 185 ${yPos}`} className="circuit-wire" />
                    
                    {/* Animated Data Pulse */}
                    <AnimatePresence>
                      {(isCurrent || !activeNode) && (
                        <motion.path
                          d={`M 15 ${yPos} L 60 ${yPos} L 100 150 L 140 ${yPos} L 185 ${yPos}`}
                          fill="transparent"
                          stroke={isCurrent ? networkData[index].color : "#2e7d32"}
                          strokeWidth="2"
                          initial={{ strokeDasharray: "10 50", strokeDashoffset: 0 }}
                          animate={{ strokeDashoffset: -60 }}
                          transition={{ repeat: Infinity, ease: "linear", duration: isCurrent ? 0.8 : 2 }}
                        />
                      )}
                    </AnimatePresence>
                  </g>
                );
              })}

              {/* Layer 2 (Top): Central Processing Hub Node rendered last so it sits above paths */}
              <motion.circle 
                cx="100" 
                cy="150" 
                r="24" 
                className="hub-circle"
                style={{ fill: "#ffffff" }} // Explicit background fill helps hide lines underneath completely
                animate={{
                  stroke: activeNode ? networkData[activeNode - 1].color : "#d8d2c4",
                  scale: activeNode ? [1, 1.05, 1] : 1
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <text x="100" y="155" textAnchor="middle" className="hub-icon">
                {activeNode ? networkData[activeNode - 1].icon : "🏭"}
              </text>

            </svg>
          </div>

          {/* Right Column: Solutions */}
          <div className="network-col solutions-side">
            <h3>The ProMiller Solution</h3>
            {networkData.map((node) => {
              const isSelected = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  className={`network-node solution-card ${isSelected ? "active-solution" : ""} ${activeNode && !isSelected ? "dimmed-solution" : ""}`}
                >
                  <div className="node-indicator emerald-dot" style={{ backgroundColor: isSelected ? node.color : "" }}></div>
                  <p>{node.solution}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}