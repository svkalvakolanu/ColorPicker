import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className ="navigation">
      <ul>
        <li>
          <Link href="/Random">
            <a>Randomizer</a>
          </Link>
        </li>
        <li>
          <Link href="/Scheme">
            <a>Scheme Generator</a>
          </Link>
        </li>
        <li>
          <Link href="/Visualizer">
            <a>Visualizer (Beta)</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap");

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          float: right;
        }

        li {
          float: left;
          padding: 0 20px 0 0;
        }

        a {
          text-decoration: none;
          font-family: "Sulphur Point", sans-serif;
          color: white;
          font-size: 1em;
        }

        a:hover {
          opacity: .6;
        }

        .navigation {
            grid-column: 2;
            height: 2vh;
            margin: 4vh 0;
        }
        
      `}</style>
    </div>
  );
}

export default NavBar;
