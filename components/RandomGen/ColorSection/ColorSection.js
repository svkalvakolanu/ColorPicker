import React, { Component } from "react";
import Lock from "./Lock"
import GenerateScheme from "./GenerateScheme"

class ColorSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {

        const column = {
          gridColumn: `${this.props.column + 1}`,
          backgroundColor: `${this.props.info.data.hex.value}`,
          border: "1px solid black"
        };


    return (
      <div style={column} className="color-block">
        <div className="color-info">
          <h4>{this.props.info.data.name.value}</h4>
          <p>{this.props.info.data.hex.value}</p>
          <Lock
            locked={this.props.info.locked}
            updateLock={this.props.updateLock}
            column={this.props.column}
          />
          <GenerateScheme colorInfo={this.props.info.data.hex.value}/>
        </div>
        <style jsx>{`
          .color-info {
            background: rgba(255, 255, 255, 0.3);
            width: 10vw;
            height: 15vh;
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
