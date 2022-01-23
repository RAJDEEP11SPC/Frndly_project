import React from "react";

const Nav = () => {
  const test = () => {
    if (document.getElementById("menu").dangerouslySetInnerHTML === "") {
      document.getElementById("menu").dangerouslySetinnerHTML = `
        <div className="active">
            <ul>
                <li><a href="/">Adoption</a></li>
                <li><a href="/">Community</a></li>
                <li><a href="/">Vet Guides</a></li>
                <li><a href="/">Inspiring Stories</a></li>
                <li><a href="/">How it works</a></li>
            </ul>
        </div>
        `;
    } else {
      document.getElementById("menu").dangerouslySetinnerHTML = "";
    }
  };

  return (
    <div>
      <div className="head">
        <nav className="nav">
          <div className="logo">
            <img src="" alt="ekhane logo thakbe "/>
          </div>
          <div className="list">
            <ul>
              <li>
                <a href="/">Adoption</a>
              </li>
              <li>
                <a href="/">Community</a>
              </li>
              <li>
                <a href="/">Vet Guides</a>
              </li>
              <li>
                <a href="/">Inspiring Stories</a>
              </li>
              <li>
                <a href="/">How it works</a>
              </li>
            </ul>
          </div>
          <div className="hamburger">
            <p onClick={test}>&#8801</p>
          </div>
        </nav>
        <div id="menu"></div>

        <div className="init-txt">
          <div>
            <h1>Pet Rescue</h1>
            <p>
              Pet Rescue is a platform for pet lovers to find loving, caring,
              and responsible people to adopt their pets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
