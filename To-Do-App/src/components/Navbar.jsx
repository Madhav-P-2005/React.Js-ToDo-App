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
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <FontAwesomeIcon
            icon={faListCheck}
            className={`me-4  ${isDarkMode ? "text-light" : "text-dark"}`}
            style={{ fontSize: 36, fontWeight: 900 }}
          />
          <span
            style={{
              fontFamily: "Eagle Lake, serif",
              fontWeight: 900,
              fontSize: 32,
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
          style={{ fontSize: 30 }}
          title={
            isDarkMode
              ? "Switch to light Mode"
              : "Switch to Dark Mode"
          }
        />
      </div>
    </nav>
  );
};

export default Navbar;
