import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

const NavBar = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/doug-galv/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/SrRaven" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <button
          onClick={toggleLanguage}
          className="ml-4 relative flex items-center w-20 h-8 rounded-full bg-neutral-800 transition-colors"
        >
          <span
            className={`absolute left-2 text-xs font-medium transition-opacity ${
              language === "en" ? "text-white opacity-100" : "text-neutral-400 opacity-50"
            }`}
          >
            EN
          </span>
          <span
            className={`absolute right-2 text-xs font-medium transition-opacity ${
              language === "pt" ? "text-white opacity-100" : "text-neutral-400 opacity-50"
            }`}
          >
            PT
          </span>
          <span
            className={`absolute top-1 w-8 h-6 rounded-full bg-purple-600 transition-transform ${
              language === "en" ? "translate-x-1" : "translate-x-10"
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
