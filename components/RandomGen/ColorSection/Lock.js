import React, {Component} from "react";

class Lock extends Component {
  constructor(props) {
    super(props);
  }

render() {

        if (this.props.locked === false) {
          return (
            <div>
              <button onClick={() => this.props.updateLock(this.props.column)} className="lock-button" type="button">
                LOCK
              </button>
              <style jsx>{`
                @import url("https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap");

                .lock-button {
                  display: block;
                  text-align: center;
                  height: 3vh;
                  width: 5vw;
                  background-color: white;
                  border: 1px solid black;
                  border-radius: 3px;
                  font-family: "Sulphur Point", sans-serif;
                  color: black;
                  font-size: 14px;
                  cursor: pointer;
                  margin: auto;
                }
              `}</style>
            </div>
          );
        } else {
          return (
            <div>
              <button
                onClick={() => this.props.updateLock(this.props.column)}
                className="unlock-button"
                type="button"
              >
                UNLOCK
              </button>
              <style jsx>{`
                @import url("https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap");

                .unlock-button {
                  display: block;
                  text-align: center;
                  height: 3vh;
                  width: 5vw;
                  background-color: black;
                  border: 1px solid white;
                  border-radius: 3px;
                  font-family: "Sulphur Point", sans-serif;
                  color: white;
                  font-size: 14px;
                  cursor: pointer;
                  margin: auto;
                }
              `}</style>
            </div>
          );
        }
}
}

export default Lock;
