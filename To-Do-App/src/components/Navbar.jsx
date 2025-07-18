import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav
      className={`navbar shadow-sm p-1 mb-5 mx-5 rounded-5 ${
        isDarkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <FontAwesomeIcon
            icon={faListCheck}
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: isDarkMode ? "white" : "black",
            }}
          />
          <span
            style={{
              fontFamily: "Eagle Lake ,serif",
              fontWeight: 900,
              fontStyle: "normal",
              fontSize: 40,
              marginLeft: "20px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            My-ToDo
          </span>
        </a>
        <FontAwesomeIcon
          icon={isDarkMode ? faMoon : faSun}
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ fontSize: 40, fontWeight: 900, cursor: "pointer" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
