import {
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import store from "../../store";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";
import { formatCurrency } from "../../utils/helpers";
import LinkButton from "../../ui/LinkButton";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const {
    username,
    position,
    address,
    error: addressError,
    status: addressStatus,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";
  const dispatch = useDispatch();

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (cart.length === 0) {
    return (
      <div className="mt-20 text-center">
        <LinkButton to="/menu">Back to menu, cart empty ⛔</LinkButton>
      </div>
    );
  }

  return (
    <div className="px-3">
      <h2 className="mb-8 mt-6 text-xl font-semibold">
        Ready to order? Let's go!
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="mb-1 sm:mb-0 sm:basis-32">First Name</label>
          <input
            defaultValue={username}
            className="input grow"
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="mb-1 sm:mb-0 sm:basis-32">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <span className="mt-2 block rounded-md bg-red-100 px-2 py-1 text-xs text-red-400">
                {formErrors.phone}
              </span>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="mb-1 sm:mb-0 sm:basis-32">Address</label>
          <div className="relative grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              defaultValue={address}
              required
              disabled={isLoadingAddress}
            />
            {!position.latitude && !position.longitude && (
              <span className="absolute right-1 top-[3px] sm:right-1.5 sm:top-[5px]">
                <Button
                  disabled={isLoadingAddress}
                  type={"secondary"}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  Get Position
                </Button>
              </span>
            )}
            {addressStatus === "error" && (
              <span className="absolute left-0 right-0 mt-2 block rounded-md bg-red-100 px-2 py-1 text-xs text-red-400">
                {addressError}
              </span>
            )}
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />

          <Button disabled={isSubmitting || isLoadingAddress} type={"primary"}>
            {isSubmitting
              ? "Placing order...."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
  };

  const errors = {};

  if (!isValidPhone(data.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  // Do NOT overuse Because it's lead to bad performance
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
