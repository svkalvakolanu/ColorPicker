import React from "react";

const Flash = () => (
  <div className="container">
    <img src="Iro-Home.gif" alt="home-img" />
    <div className="home-text">
      <h1>Welcome to Iro.</h1>
      <h2>Please select an option above to get started.</h2>
    </div>

    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap");
      img {
        height: 90.8vh;
        width: 100vw;
      }
      .container {
        height: 90.8vh;
        width: 100vw;
        position: relative;
        text-align: center;
      }
      .home-text {
        font-family: "Sulphur Point", sans-serif;
        position: absolute;
        color: white;
        top: 45%;
        left: 0%;
        width: 100vw;
      }
    `}</style>
  </div>
);

export default Flash;
