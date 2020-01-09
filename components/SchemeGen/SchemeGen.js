import React, { Component } from "react";
import SchemeOptions from "./SchemeHeader/SchemeOptions";
import ColorContainer from "./ColorSection/ColorContainer";
import ColorSearch from "./ColorSection/ColorSearch";
import SchemeInfo from "./SchemeHeader/SchemeInfo";

class SchemeGen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorsNeeded: 3,
      mode: "monochrome",
      hex: "",
      colors: []
    };
  }

  getColorsNeeded = num => {
    this.setState({ colorsNeeded: num });
  };

  getMode = style => {
    this.setState({ mode: style });
  };

  getHex = color => {
    let adjustedColor = color.split("#").join("");
    this.setState({ hex: adjustedColor });
  };

  updateLock = idx => {
    let updatedArray = this.state.colors.slice(0);
    updatedArray[idx].locked = !this.state.colors[idx].locked;
    this.setState({ colors: updatedArray });
  };

  fetchColors = () => {
    let colorsToFetch =
      "https://www.thecolorapi.com/scheme?hex=" +
      this.state.hex +
      "&mode=" +
      this.state.mode +
      "&count=" +
      this.state.colorsNeeded;
    fetch(colorsToFetch)
      .then(res => res.json())
      .then(res =>
        this.setState({
          colors: res
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="scheme-info">
          <SchemeInfo />

          <SchemeOptions
            getNumbers={this.getColorsNeeded}
            clickFunction={this.fetchColors}
            updateMode={this.getMode}
            updateHex={this.getHex}
          />
        </div>
        <ColorSearch color={this.state.hex} />

        <ColorContainer hex={this.state.hex} columns={this.state.colorsNeeded} colorData={this.state.colors} height={"70.7vh"} />

        <style jsx>{`
          @import url("https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap");

          .scheme-info {
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

export default SchemeGen;



        