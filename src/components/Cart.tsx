import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addToCart,
  removeOne,
  removeItemCompletely,
  clearCart,
} from "../redux/features/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.cartItems);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0)
    return <h1 className="text-center text-xl mt-10">Your cart is empty</h1>;

  return (
    <div className="p-5 max-w-xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="border p-3 rounded-md flex justify-between"
        >
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p>₹{item.price}</p>
          </div>

          <div className="flex items-center space-x-3">
            <button onClick={() => dispatch(removeOne(item.id))}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(addToCart(item))}>+</button>

            <button
              className="text-red-600"
              onClick={() => dispatch(removeItemCompletely(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2 className="text-xl font-bold">Total: ₹{total}</h2>

      <button
        className="bg-red-600 text-white w-full py-2 rounded-md"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
