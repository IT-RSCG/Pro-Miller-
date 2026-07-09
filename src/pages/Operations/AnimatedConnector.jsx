import { motion } from "framer-motion";

const AnimatedConnector = ({ isActive }) => {
  return (
    <div className="connector">
      <svg
        className="connector-svg"
        viewBox="0 0 220 40"
        preserveAspectRatio="none"
      >
        <path d="M10 20 L210 20" className="connector-bg" />

        <motion.path
          d="M10 20 L210 20"
          className="connector-active"
          strokeDasharray="18 12"
          initial={{ strokeDashoffset: 60 }}
          animate={{
            strokeDashoffset: isActive ? 0 : 60,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
};

export default AnimatedConnector;
