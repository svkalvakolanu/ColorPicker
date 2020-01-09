import React, { Component } from "react";

class SchemeOptions extends Component {
  render() {
    return (
      <div className="buttons-grid">
        <select
          id="num-dropdown"
          ref={input => (this.num = input)}
          onChange={() => this.props.getNumbers(parseInt(this.num.value))}
        >
          <option value="3">Three (3)</option>
          <option value="4">Four (4)</option>
          <option value="5">Five (5)</option>
          <option value="6">Six (6)</option>
          <option value="7">Seven (7)</option>
        </select>

        <select
          id="mode-dropdown"
          ref={input => (this.mode = input)}
          onChange={() => this.props.updateMode(this.mode.value)}
        >
          <option value="monochrome">Monochrome</option>
          <option value="monochrome-dark">Monochrome (Dark)</option>
          <option value="monochrome-light">Monochrome (Light)</option>
          <option value="analogic">Analogic</option>
          <option value="complement">Complementary</option>
          <option value="analogic-complement">Analogic-Complementary</option>
          <option value="triad">Triad</option>
          <option value="quad">Quad</option>
        </select>

        <input
          ref={input => (this.textInput = input)}
          onChange={() => this.props.updateHex(this.textInput.value)}
          className="hex-search"
          type="text"
          placeholder="Hex Code"
        />

        <button
          className="fetch-button"
          type="button"
          onClick={() => this.props.clickFunction()}
        >
          Generate
        </button>

        <style jsx>{`
          @import url("https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap");

          button {
            display: block;
            margin: 0px auto;
            text-align: center;
            max-width: 150px;
            max-height: 7vh;
            padding: 14px 10px;
            background-color: black;
            border-radius: 3px;
            font-family: "Sulphur Point", sans-serif;
            color: white;
            font-size: 14px;
            cursor: pointer;
            margin: 1.5vh 0;
          }

          .hex-search {
            height: 4vh;
            margin: -2.5vh 0;
            width: 7.5vw;
            grid-column: 3;
            font-size: 1.5em;
            font-family: "Sulphur Point", sans-serif;
          }

          .fetch-button {
            grid-column: 4;
            margin: -3.5vh 0;
          }

          #num-dropdown {
            grid-column: 2;
            display: block;
            height: 2vh;
            width: 10vw;
            margin: 3vh 0 0 0;
          }

          #mode-dropdown {
            grid-column: 2;
            display: block;
            height: 2vh;
            width: 10vw;
            margin: 0 0 3vh 0;
          }

          .buttons-grid {
            display: grid;
            grid-template-columns: 10vw 1fr 1fr 1fr;
          }
        `}</style>
      </div>
    );
  }
}

export default SchemeOptions;
