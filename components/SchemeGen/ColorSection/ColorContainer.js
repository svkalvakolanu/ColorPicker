import React, { Component } from "react";
import ColorSection from "./ColorSection";

const ColorContainer = props => {
  if (props.hex.length < 3 || props.hex.length > 6) {
    return (
      <div>
        Please enter a valid HexCode above and press the "Generate" button.
      </div>
    );
  } else {
    if (props.colorData.colors === undefined) {
      return <div>Click "Generate" to generate your scheme.</div>;
    } else {
      let colors = props.colorData.colors.map((color, i) => {
        return <ColorSection info={color} idx={i}/>;
      });
    const container = {
      display: "grid",
      gridTemplateColumns: `repeat(${props.columns}}, 1fr)`,
      height: `${props.height}`
    };
      return (
        <div style={container}>
          {colors}
        </div>
      );
    }
  }
};

export default ColorContainer;