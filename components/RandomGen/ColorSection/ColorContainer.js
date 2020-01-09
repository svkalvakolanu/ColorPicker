import React, {Component} from "react";
import ColorSection from "./ColorSection"

// const grid = props => {
// display: grid,
// gridTemplateColumns: {props.columns}
// }

class ColorContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let colors = this.props.colorData.map((color, i) => {
      return <ColorSection info={color} column={i} updateLock={this.props.updateLock}/>;
    });

    const container = {
        display: "grid",
        gridTemplateColumns: `repeat(${this.props.columns}}, 1fr)`,
        height: `${this.props.height}`
    };

    return (
      <div style={container} className="color-container">
        {colors}

        <style jsx>{`
        `}</style>
      </div>
    );
  }
}

export default ColorContainer;
