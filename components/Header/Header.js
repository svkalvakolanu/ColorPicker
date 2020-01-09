import React from "react";
import NavBar from "./NavBar/NavBar";
import Link from "next/link";

function Header() {
  return (
    <div className="header">
      <Link href="/">
        <a>
          Iro いろ
        </a>
      </Link>

      <NavBar className="nav" />

      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap");

          .header {
            background: rgba(0, 0, 0, 0.95);
            color: white;
            height: 10vh;
            width: 100vw;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          a {
            display: block;
            text-decoration: none;
            font-family: "Sulphur Point", sans-serif;
            color: white;
            font-size: 2em;
            width: 30vw;
            height: 6vh;
            margin: 2vh 0;
            padding: 0 0 0 2.5vw;
            grid-column: 1;
          }

          a:hover {
            opacity: 0.6;
          }

        `}
      </style>
    </div>
  );
}

export default Header;
