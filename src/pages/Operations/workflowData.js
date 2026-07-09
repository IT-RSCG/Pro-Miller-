import softwareAnimation from "../../assets/laptop.json";
import serverAnimation from "../../assets/server.json";
import modbusAnimation from "../../assets/modbus.json";
import millAnimation from "../../assets/mill.json";

const workflowData = [
  {
    id: 1,
    title: "Software",
    animation: softwareAnimation,
    shortTitle: "Software",
    description:
      "The Software receives commands from the operator and initiates the complete milling workflow. It validates the request before forwarding it to the server.",
  },

  {
    id: 2,
    title: "Server",
    animation: serverAnimation,
    shortTitle: "Server",
    description:
      "The Server processes the incoming request, stores operational information and communicates with industrial devices through the Modbus protocol.",
  },

  {
    id: 3,
    title: "Modbus",
    animation: modbusAnimation,
    shortTitle: "Modbus",
    description:
      "Modbus acts as the communication bridge between the server and WonderMill, ensuring reliable and real-time data transfer.",
  },

  {
    id: 4,
    title: "WonderMill",
    animation: millAnimation,
    shortTitle: "WonderMill",
    description:
      "WonderMill receives the processed command and executes the requested milling operation accurately and efficiently.",
  },
];

export default workflowData;