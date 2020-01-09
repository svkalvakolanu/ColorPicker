import React, { Component } from "react";
import Link from "next/link";

class GenerateScheme extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.colorInfo)
    return (
      <div>
        <button className="scheme-button" type="button">
          <Link href={"/Scheme/" + this.props.colorInfo}>
            <a>Generate Scheme</a>
          </Link>
        </button>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap");

          .scheme-button {
            display: block;
            text-align: center;
            height: 3vh;
            width: 7.5vw;
            background-color: white;
            border: 1px solid black;
            border-radius: 3px;
            font-family: "Sulphur Point", sans-serif;
            color: black;
            font-size: 14px;
            cursor: pointer;
            margin: 5px auto;
          }

          a{
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}

export default GenerateScheme;
