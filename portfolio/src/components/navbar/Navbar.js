import React from "react";

function Navbar() {
  return (
    <nav>
      <a href="/">
        <div id="logo">
          <h1>NLJ</h1>
          <span>Web Developer</span>
        </div>
      </a>
      <div id="menu">
        <ul className="links">
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/work">work</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
