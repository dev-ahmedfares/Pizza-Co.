import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const className = "inline-block hover:underline-offset-4 text-sm hover:underline  mb-5 mt-3 text-blue-500";
  const navigate = useNavigate();
  
  if (to === "-1") {
    return (
      <button to={to} className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
