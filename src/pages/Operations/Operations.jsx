import { useEffect, useState } from "react";
import { gsap } from "gsap";

import "./Operations.css";

import workflowData from "./workflowData";
import ProcessTimeline from "./ProcessTimeline";

const Operations = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: -1,
    });

    workflowData.forEach((_, index) => {
      timeline.call(() => {
        setActiveStep(index);
      });

      timeline.to(
        {},
        {
          duration: 2,
        },
      );
    });
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section className="operations">
      {/* 
      <div className="operations-header">

        <span className="operations-subtitle">
          OPERATIONS WORKFLOW
        </span>

        <h1>
          How Every Component Works Together
        </h1>

        <p>
          Understand how the Software communicates with the Server,
          transfers data through Modbus and finally controls WonderMill
          in a seamless industrial automation workflow.
        </p>

      </div> */}

      <ProcessTimeline workflow={workflowData} activeStep={activeStep} />
    </section>
  );
};

export default Operations;
