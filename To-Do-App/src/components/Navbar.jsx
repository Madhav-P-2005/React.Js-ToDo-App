import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav
      className={`navbar shadow p-2 mx-4  mb-4 custom-navbar ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <FontAwesomeIcon
            icon={faListCheck}
            className={`me-3 ${isDarkMode ? "text-white" : "text-dark"}`}
            style={{ fontSize: 36, fontWeight: 900 }}
          />
          <span
            style={{
              fontFamily: "Eagle Lake, serif",
              fontWeight: 900,
              fontSize: 32,
            }}
            className={isDarkMode ? "text-white" : "text-dark"}
          >
            My-ToDo
          </span>
        </a>

        <FontAwesomeIcon
          icon={isDarkMode ? faMoon : faSun}
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`cursor-pointer ${
            isDarkMode ? "text-white" : "text-dark"
          }`}
          style={{ fontSize: 30 }}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        />
      </div>
    </nav>
  );
};

export default Navbar;