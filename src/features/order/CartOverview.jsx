import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice, getTotalCartQuantity } from "../cart/cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return;

  return (
    <footer className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 sm:text-base">
      <p className="space-x-2">
        <span>{totalCartQuantity} PIZZAS</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">OPEN CART &rarr;</Link>
    </footer>
  );
}

export default CartOverview;
