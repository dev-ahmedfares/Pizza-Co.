import CartItem from "./CartItem";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyPage from "../../ui/EmptyPage";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (cart.length === 0) return <EmptyPage />;

  return (
    <div className="px-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="text-xl font-semibold">Your cart, {username}</h2>
      <ul className="divide-y border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-4 space-x-3 text-center sm:text-start">
        <Button to="/order/new" type={"primary"}>
          Order pizzas
        </Button>

        <Button type={"lightBtn"} onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;

// <DeleteItem onClick={() => dispatch(deleteCart(id))} type={"primary"}>Delete</DeleteItem>
