import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addCart, deleteCart, getCurrentQuantity } from "../cart/cartSlice";
import DeleteItem from "../../ui/DeleteItem";
import UpdateCartQuantity from "../cart/UpdateCartQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(id));
  const isInCart = currentQuantity > 0;

  function handleAddCart() {
    const newCart = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: 1 * unitPrice,
    };

    dispatch(addCart(newCart));
  }

  return (
    <li className="flex gap-4 py-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-sm capitalize italic">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p className="">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="mt-auto">Sold out</p>
          )}
          {isInCart && (
            <div className="flex items-center gap-5">
              <UpdateCartQuantity pizzaId={id}/>
              <DeleteItem
                onClick={() => dispatch(deleteCart(id))}
                type={"secondary"}
              >
                Delete
              </DeleteItem>
            </div>
          )}

          {!isInCart && !soldOut && (
            <Button onClick={handleAddCart} type={"secondary"}>
              ADD TO CART
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
