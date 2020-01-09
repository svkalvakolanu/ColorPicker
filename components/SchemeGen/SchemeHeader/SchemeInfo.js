import React from "react";

const SchemeInfo = () => (
  <div className="scheme-info">
    <h1 className="scheme-title">Color Scheme Generator</h1>
    <p className="scheme-desc">
      Iro can generate a color scheme based on an input. You can select the amount of colors returned using the dropdown. Use the Search Bar to give a custom hex input the color scheme.
    </p>

    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap");

      .scheme-info {
        margin: 1.5vh 0;
      }

      .scheme-title {
        font-family: "Sulphur Point", sans-serif;
        font-size: 1.25em;
        margin: 0;
        height: 2vh;
        width: 40vw;
        padding: 0 0 0 2.5vw;
      }
      .scheme-desc {
        font-family: "Sulphur Point", sans-serif;
        font-size: 0.9em;
        height: 2vh;
        margin: 0.5vh 0 0 0;
        width: 40vw;
        padding: 0 0 0 2.5vw;
      }
    `}</style>
  </div>
);

export default SchemeInfo;
