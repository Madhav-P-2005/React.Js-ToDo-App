import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav
      className={`navbar custom-border mb-4 ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
      style={{ marginTop: "1rem", borderRadius: "2rem" }}
    >
      <div
        className="container d-flex justify-content-between align-items-center flex-nowrap px-2"
        style={{ minWidth: 0 }}
      >
        <a
          className="navbar-brand d-flex align-items-center gap-2 flex-nowrap"
          href="#"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <FontAwesomeIcon
            icon={faListCheck}
            className={` ${isDarkMode ? "text-light" : "text-dark"}`}
            style={{ fontSize: "2rem" }}
          />
          <span
            style={{
              fontFamily: "Eagle Lake, serif",
              fontWeight: 900,
              fontSize: "2rem",
            }}
            className={isDarkMode ? "text-light" : "text-dark"}
          >
            My-ToDo
          </span>
        </a>

        <FontAwesomeIcon
          icon={isDarkMode ? faMoon : faSun}
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`cursor-pointer ${
            isDarkMode ? "text-light" : "text-dark"
          }`}
          style={{ fontSize: "1.5rem", flexShrink: 0 }}
          title={isDarkMode ? "Switch to light Mode" : "Switch to Dark Mode"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
