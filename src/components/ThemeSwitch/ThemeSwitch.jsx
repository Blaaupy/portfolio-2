import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ThemeSwitch.scss";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switch">
      {/* Light Icon - Soleil */}
      <svg
        className={`icon ${theme === "light" ? "active" : "inactive"}`}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path xmlns="http://www.w3.org/2000/svg" d="M11.3436 0.224871C11.742 0.541028 11.8893 1.11452 11.7085 1.61449L9.08363 8.8236H13.9283C14.3802 8.8236 14.782 9.13241 14.936 9.59929C15.09 10.0662 14.9595 10.5882 14.6146 10.9044L4.97222 19.7273C4.59389 20.0729 4.05486 20.0913 3.65644 19.7751C3.25802 19.459 3.11071 18.8855 3.2915 18.3855L5.91637 11.1764H1.07174C0.619754 11.1764 0.217988 10.8676 0.063978 10.4007C-0.0900324 9.93383 0.0405416 9.4118 0.385391 9.09565L10.0278 0.272662C10.4061 -0.0729045 10.9451 -0.0912859 11.3436 0.224871Z"/>
      </svg>

      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <span className={`slider ${theme}`}></span>
      </label>

      {/* Dark Icon - Lune */}
      <svg
        className={`icon ${theme === "dark" ? "active" : "inactive"}`}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path xmlns="http://www.w3.org/2000/svg" d="M9.87584 0C4.42098 0 0 4.47656 0 10C0 15.5234 4.42098 20 9.87584 20C12.53 20 14.9411 18.9375 16.7156 17.2109C16.9973 16.9375 17.0783 16.5117 16.9201 16.1523C16.7619 15.793 16.3916 15.5703 16.002 15.6016C15.8129 15.6172 15.6239 15.625 15.431 15.625C11.5115 15.625 8.33274 12.4062 8.33274 8.4375C8.33274 5.62109 9.93371 3.17969 12.2715 2C12.6226 1.82422 12.8232 1.44141 12.7769 1.04688C12.7306 0.652344 12.4451 0.332031 12.0632 0.246094C11.3572 0.0859376 10.6242 0 9.87584 0Z"/>
      </svg>
    </div>
  );
}
