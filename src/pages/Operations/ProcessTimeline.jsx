import React, { useEffect, useRef } from "react";
import ProcessNode from "./ProcessNode";
import AnimatedConnector from "./AnimatedConnector";

const ProcessTimeline = ({ workflow, activeStep }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const nodes = wrapperRef.current.querySelectorAll(".process-node");

    if (nodes[activeStep]) {
      nodes[activeStep].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeStep]);

  return (
    <div className="timeline-wrapper" ref={wrapperRef}>
      <div className="process-timeline">
        {workflow.map((step, index) => (
          <React.Fragment key={step.id}>
            <ProcessNode
              step={step}
              isActive={index <= activeStep}
            />

            {index !== workflow.length - 1 && (
              <AnimatedConnector
                isActive={index < activeStep}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;