import React, { Component } from "react";

class ColorSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const column = {
      backgroundColor: `#${this.props.color}`,
      height: "10vh",
      width: "100vw",
      border: "2px solid black",
      margin: "auto",
      textAlign: "center"
    };

    const other = {
      backgroundColor: "white",
      height: "1vh",
      width: "100vw"
    };

    if (this.props.color.length >= 3) {
      return <div style={column} className="color-block">#{this.props.color}</div>;
    } else {
      return <div style={other} className="color-block"></div>;
    }
  }
}

export default ColorSearch;

