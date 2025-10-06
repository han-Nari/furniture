import { useEffect } from "react";
import {
  clearCart,
  removeFromCart,
  myCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/addCartSlice";
import { useSelector, useDispatch } from "react-redux";
import empty from "../assets/empty.png";
import { Link } from "react-router-dom";

export default function Carts() {
  const { cartItems } = useSelector(myCart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section aria-labelledby="cart" className="py-20">
      <div className="wrapper">
        {cartItems.length === 0 ? (
          <>
            <img className="mx-auto py-30" src={empty} alt="emptyCart"></img>
          </>
        ) : (
          <>
            {/* Table for Desktop */}
            <div className="hidden md:block">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-xl font-semibold text-gray-700">
                    <th className="px-4 py-3">Image</th>
                    <th className="px-4 py-3">Product</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Quantity</th>
                    <th className="px-4 py-3">Total</th>
                    <th className="px-4 py-3">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-100">
                      <td className="px-4 py-4">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="h-40 w-40 object-cover rounded-md"
                        />
                      </td>
                      <td className="px-4 py-4 font-medium">{item.name}</td>
                      <td className="px-4 py-4 font-bold">${item.price}</td>
                      <td className="px-4 py-4">
                        <div className="flex gap-5 items-center">
                          <button
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                            className="px-2 py-1  rounded"
                          >
                            -
                          </button>
                          {item.quantity}
                          <button
                            onClick={() => dispatch(increaseQuantity(item.id))}
                            className="px-2 py-1  rounded"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4 font-medium">
                        ${item.price * item.quantity}
                      </td>
                      <td className="px-4 py-4">
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className=" px-3 py-1 hover:text-red-500 cursor-pointer self-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-trash-icon lucide-trash"
                          >
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M3 6h18" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card layout for Mobile */}
            <div className="md:hidden grid gap-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className=" rounded-xl p-4 shadow-md flex flex-col gap-3 bg-white"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-30 w-30 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-3 items-center">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="px-3 py-1  rounded"
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="px-3 py-1  rounded"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className=" px-3 py-1  hover:text-red-500 cursor-pointer self-end"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-trash-icon lucide-trash"
                    >
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                      <path d="M3 6h18" />
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-10 py-20 lg:flex-row lg:justify-between">
              <div className="flex flex-col gap-10 lg:flex-1">
                <div className="flex flex-col gap-5 lg:flex-row">
                  <button
                    onClick={() => dispatch(clearCart())}
                    className="cursor-pointer text-white rounded-3xl w-fit bg-[#2F2F2F] px-7 py-2.5 font-bold hover:bg-[#222222]"
                  >
                    Clear Cart
                  </button>

                  <button className="cursor-pointer text-white rounded-3xl w-fit bg-[#2F2F2F] px-7 py-2.5 font-bold hover:bg-[#222222]">
                    <Link to="/shop">Continue Shopping</Link>
                  </button>
                </div>

                <div className="grid gap-5">
                  <h3 className="text-2xl font-semibold">Coupon</h3>
                  <p className="text-[#97A494] text-md">
                    Enter your coupon code if you have one.
                  </p>
                  <div className="grid gap-5 lg:flex">
                    <input
                      type="text"
                      placeholder="Coupon Code "
                      className="w-full lg:w-[30%] p-2 border bg-white border-[#97A494] focus:border-[#222222] focus:outline-none rounded-md"
                    ></input>

                    <button className="cursor-pointer text-white rounded-3xl w-fit bg-[#2F2F2F] px-7 py-2.5 font-bold hover:bg-[#222222]">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-2xl font-semibold uppercase">Cart Total</h3>
                <p className="text-[#97A494] text-md"></p>
                <h3 className="text-md font-semibold text-[#222222]">
                  Sub Total: ${totalPrice.toFixed(2)}
                </h3>
                <h3 className="text-md font-semibold text-[#222222]">
                  Total: ${totalPrice + 50}
                </h3>
                <button className="cursor-pointer text-white rounded-3xl w-fit bg-[#2F2F2F] px-7 py-2.5 font-bold hover:bg-[#222222]">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
