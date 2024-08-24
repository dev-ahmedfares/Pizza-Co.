import { Link } from "react-router-dom";

function Button({ children, disabled, type, to, onClick }) {
  const baseStyle =
    "inline-block rounded-full bg-yellow-400 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 hover:focus:ring-yellow-300 disabled:cursor-not-allowed ";

  const modStyles = {
    primary: `${baseStyle} px-4 py-2.5 text-xs sm:text-sm`,
    secondary: `${baseStyle} px-3 py-2 text-xs  sm:px-4 sm:py-2.5`,
    round:`${baseStyle} px-3 py-2 text-xs `,
    lightBtn:
      "inline-block hover:bg-stone-200 hover:border-stone-200 transition-all duration-300 hover:text-stone-800 uppercase font-semibold rounded-full border-2 border-stone-300 text-stone-400 px-4 py-2.5 text-xs sm:text-sm",
  };

  if (to) {
    return (
      <Link to={to} className={modStyles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${modStyles[type]}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  return (
    <button className={`${modStyles[type]}`} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
