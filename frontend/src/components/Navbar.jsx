import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {

  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (

    <div className="navbar">

      <h1>Employee Management System</h1>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {
          darkMode
          ? <FaSun />
          : <FaMoon />
        }
      </button>

    </div>
  );
}