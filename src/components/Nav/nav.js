import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import "./nav-style.css"
import coverImage from "../../assets/cover/portfolio-header-best.jpg";
import Header from "../Header/header";

function Nav(props) {
  const { tabs = [], setCurrentTab, currentTab } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <div>
      {/* <h1>
        <a href="/">Krista McPherson's Portfolio</a>
      </h1> */}
      {/* <img src={coverImage} className="my-2, slide-in-right" style={{ width: "100%" }} alt="cover" /> */}

      {/* <nav>
        <ul className="flex-row">
          <li className="mx-2"></li>
          {tabs.map((tab) => (
            <li
              className={`mx-1 ${currentTab.name === tab.name && "navActive"}`}
              key={tab.name}
            >
              <span
                onClick={() => {
                  setCurrentTab(tab);
                }}
              >
                {capitalizeFirstLetter(tab.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav> */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src="assets/img/navbar-logo.svg" alt="..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="mx-2"></li>
              {tabs.map((tab) => (
                <li
                  className={`mx-1 ${
                    currentTab.name === tab.name && "navActive"
                  }`}
                  key={tab.name}
                >
                  <span
                    onClick={() => {
                      setCurrentTab(tab);
                    }}
                  >
                    {capitalizeFirstLetter(tab.name)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
