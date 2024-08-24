import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";


function Header() {

  return (
    <header className="flex items-center justify-between bg-yellow-300 px-3 py-4">
      <Link to="/" className=" tracking-widest">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
