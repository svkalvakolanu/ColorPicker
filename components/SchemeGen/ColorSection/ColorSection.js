import React, { Component } from "react";

class ColorSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {

            const column = {
              gridColumn: `${this.props.idx + 1}`,
              backgroundColor: `${this.props.info.hex.value}`,
              border: "1px solid black"
            };

    return (
      <div style={column} className="color-block">
        <div className="color-info">
            <h4>{this.props.info.name.value}</h4>
            <p>{this.props.info.hex.value}</p>
        </div>
        <style jsx>{`
          .color-info {
            background: rgba(255, 255, 255, 0.3);
            width: 10vw;
            height: 7vh;
            margin: auto;
            color: black;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default ColorSection;
