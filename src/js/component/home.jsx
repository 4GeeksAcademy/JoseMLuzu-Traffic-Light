import React, { useState } from "react";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
  const [color, setColor] = useState("roja");

  const cambiarColor = () => {
    switch (color) {
      case "roja":
        setColor("verde");
        break;
      case "amarilla":
        setColor("roja");
        break;
      case "verde":
        setColor("amarilla");
        break;
      default:
        setColor("roja");
    }
  };

  return (
    <div>
      <div className="palo"></div>

      <div className="traffic-light">
        <div
          onClick={() => setColor("roja")}
          className={"luz roja" + (color === "roja" ? " glow" : "")}
        ></div>

        <div
          onClick={() => setColor("amarilla")}
          className={"luz amarilla" + (color === "amarilla" ? " glow" : "")}
        ></div>

        <div
          onClick={() => setColor("verde")}
          className={"luz verde" + (color === "verde" ? " glow" : "")}
        ></div>
      </div>

      <button onClick={cambiarColor}>Cambiar Color</button>
    </div>
  );
};

export default Home;
