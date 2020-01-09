import React, { Component } from "react";
import RandomizerOptions from "./RandomizerHeader/RandomizerOptions/RandomizerOptions";
import ColorContainer from "./ColorSection/ColorContainer";
import RandomizerInfo from "./RandomizerHeader/RandomizerInfo/RandomizerInfo"

class RandomGen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorsNeeded: 3,
      colors: []
    };
  }

  getColorsNeeded = num => {
    this.setState({ colorsNeeded: num });
  };

updateLock = (idx) => {
  let updatedArray = this.state.colors.slice(0)
  updatedArray[idx].locked = !(this.state.colors[idx].locked)
  this.setState({ colors: updatedArray });
}

  fetchColors = () => {
    this.setState({
      colors: this.state.colors.filter(color => (color.locked === true))
    }, () => {
    let colorsToFetch = this.buildColorArray(this.state.colorsNeeded);
    for (let i = 0; i < (colorsToFetch.length - this.state.colors.length); i++) {
      fetch(colorsToFetch[i])
        .then(res => res.json())
        .then(res =>
          this.setState({
            colors: [...this.state.colors, { data: res, locked: false }]
          })
        )
        .catch(err => console.log(err));
    }
    });


  };

  buildColorArray = num => {
    let colors = [];

    for (let i = 0; i < num; i++) {
      let hexPoss = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
      ];
      let val1 = hexPoss[Math.floor(Math.random() * 16)];
      let val2 = hexPoss[Math.floor(Math.random() * 16)];
      let val3 = hexPoss[Math.floor(Math.random() * 16)];
      let val4 = hexPoss[Math.floor(Math.random() * 16)];
      let val5 = hexPoss[Math.floor(Math.random() * 16)];
      let val6 = hexPoss[Math.floor(Math.random() * 16)];

      let functionArray = [val1, val2, val3, val4, val5, val6];

      let colorSet = this.shuffleArray(functionArray);

      colors.push("https://www.thecolorapi.com/id?hex=" + colorSet.join(""));
    }

    return colors;
  };

  shuffleArray = arr => {
    let idx = arr.length;
    let hold;
    let ridx;

    while (idx) {
      ridx = Math.floor(Math.random() * idx);
      idx -= 1;

      hold = arr[idx];
      arr[idx] = arr[ridx];
      arr[ridx] = hold;
    }

    return arr;
  };

  render() {
    return (
      <div>
        <div className="randomizer-info">
          <RandomizerInfo />

          <RandomizerOptions
            getNumbers={this.getColorsNeeded}
            clickFunction={this.fetchColors}
          />
        </div>
        <ColorContainer
          columns={this.state.colors.length}
          colorData={this.state.colors}
          updateLock={this.updateLock}
          height={"80.7vh"}
        />
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap");

          .randomizer-info {
            background: rgba(0, 0, 0, 0.95);
            color: white;
            height: 10vh;
            width: 100vw;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        `}</style>
      </div>
    );
  }
}

export default RandomGen;
