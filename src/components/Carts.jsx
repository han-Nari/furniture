import { useState } from "react";
import {
  clearCart,
  removeFromCart,
  myCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/addCartSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Carts() {
  const { cartItems } = useSelector(myCart);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <section aria-labelledby="cart" className="py-20 h-[100vh]">
        <div class="wrapper ">
          {cartItems.length === 0 ? (
            <h2 className="text-center text-3xl ">Your Cart is Empty</h2>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-100">
                    <tr class="text-left text-xl font-semibold text-gray-700">
                      <th class="px-4 py-3">Image</th>
                      <th class="px-4 py-3">Product</th>
                      <th class="px-4 py-3">Price</th>
                      <th class="px-4 py-3">Quantity</th>
                      <th class="px-4 py-3">Total</th>
                      <th class="px-4 py-3">Remove</th>
                    </tr>
                  </thead>
                  {cartItems.map((item) => (
                    <tbody class="hover:bg-gray-200 divide-y divide-gray-200">
                      <tr class="text-md text-[#222222]">
                        <td class="px-4 py-4">
                          <img
                            src={item.img}
                            alt="Product"
                            class="h-30 w-30 object-cover rounded-md"
                          />
                        </td>

                        <td class="px-4 py-4">
                          <div class="font-medium text-[#222222]">
                            {item.name}
                          </div>
                        </td>

                        <td class="px-4 py-4"> ${item.price}.00</td>

                        <td class="px-4 py-4">
                          <div class=" flex gap-5 items-center [&>button]:cursor-pointer">
                            <button
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
                            >
                              -
                            </button>
                            {item.quantity}
                            <button
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <td class="px-4 py-4 font-medium">
                          ${item.price * item.quantity}.00
                        </td>

                        <td class="px-4 py-4">
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            class="cursor-pointer text-red-600 border rounded px-3 py-1 hover:bg-red-50 text-md"
                            type="button"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                  <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </table>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
