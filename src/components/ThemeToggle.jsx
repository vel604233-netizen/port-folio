import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle({ darkMode, setDarkMode }) {

  return (

    <button

      className="themeButton"

      onClick={() => setDarkMode(!darkMode)}

    >

      {

        darkMode ?

        <FaSun />

        :

        <FaMoon />

      }

    </button>

  );

}

export default ThemeToggle;