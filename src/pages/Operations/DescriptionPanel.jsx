import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const DescriptionPanel = ({ step }) => {
  return (
    <div className="description-wrapper">

      <AnimatePresence mode="wait">

        <motion.div
          key={step.id}
          className="description-panel"
          initial={{
            opacity: 0,
            y: 25
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -25
          }}
          transition={{
            duration: 0.5
          }}
        >

          <span className="description-step">

            STEP {String(step.id).padStart(2, "0")}

          </span>

          <h2>

            {step.title}

          </h2>

          <p>

            {step.description}

          </p>

        </motion.div>

      </AnimatePresence>

    </div>
  );
};

export default DescriptionPanel;