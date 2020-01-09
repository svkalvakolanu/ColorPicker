import React from "react";

const RandomizerInfo = () => (
  <div className="randomizer-info">
    <h1 className="randomizer-title">Random Color Generator</h1>
    <p className="randomizer-desc">
      Iro can generate a random set of colors (up to 7). To change the amount of
      colors, use the dropdown. To generate the colors, click the button. After generating, you can lock colors you want to keep before re-generating!
    </p>

    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap");

      .randomizer-info {
        margin: 1.5vh 0;
      }

      .randomizer-title {
        font-family: "Sulphur Point", sans-serif;
        font-size: 1.25em;
        margin: 0;
        height: 2vh;
        width: 40vw;
        padding: 0 0 0 2.5vw;
      }
      .randomizer-desc {
        font-family: "Sulphur Point", sans-serif;
        font-size: 0.9em;
        height: 2vh;
        margin: .5vh 0 0 0;
        width: 40vw;
        padding: 0 0 0 2.5vw;
      }
    `}</style>
  </div>
);

export default RandomizerInfo;
