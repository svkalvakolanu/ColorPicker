import React, {Component} from "react";

class RandomizerOptions extends Component {
  render() {
    return (
      <div className="buttons-grid">
        <select
          id="dropdown"
          ref={input => (this.menu = input)}
          onChange={() => this.props.getNumbers(parseInt(this.menu.value))}
        >
          <option value="3">Three (3)</option>
          <option value="4">Four (4)</option>
          <option value="5">Five (5)</option>
          <option value="6">Six (6)</option>
          <option value="7">Seven (7)</option>
        </select>

        <button className="fetch-button" type="button" onClick={() => this.props.clickFunction()}>Generate</button>

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

          .fetch-button {
            grid-column: 4;
          }

          #dropdown {
            grid-column: 3;
            display: block;
            heigh: 1vh;
            width: 10vw;
            margin: 4.5vh 0;
          }

          .buttons-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }

        `}</style>
      </div>
    );
  }
}


export default RandomizerOptions;
