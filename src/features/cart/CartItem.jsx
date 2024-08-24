import { useDispatch } from "react-redux";
import DeleteItem from "../../ui/DeleteItem";
import { formatCurrency } from "../../utils/helpers";
import { deleteCart } from "./cartSlice";
import UpdateCartQuantity from "./UpdateCartQuantity"

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch()
  
  return (
    <li className="py-4 sm:flex sm:justify-between sm:items-center">
      <p >
        {quantity}&times; {name}
      </p>
      <div className="flex gap-3 items-center mt-3 sm:mt-0 justify-between">
        <p className="font-semibold text-sm">{formatCurrency(totalPrice)}</p>
        <UpdateCartQuantity pizzaId={pizzaId}/>
        <DeleteItem onClick={() => dispatch(deleteCart(pizzaId))} type={"secondary"}>Delete</DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
