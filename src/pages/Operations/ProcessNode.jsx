import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

const ProcessNode = ({ step, isActive }) => {
  return (
    <motion.div
      className={`process-node ${isActive ? "active" : ""}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: isActive ? 1.12 : 0.9,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <div className="node-glow"></div>
      <div className="node-animation">
        <Lottie
          animationData={step.animation}
          loop
          autoplay
        />
      </div>

      <h3>{step.title}</h3>
    </motion.div>
  );
};

export default ProcessNode;