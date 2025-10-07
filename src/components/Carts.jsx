import { useEffect, useState } from "react";
import {
  clearCart,
  removeFromCart,
  myCart,
  increaseQuantity,
  decreaseQuantity,
  applyCoupon,
} from "../features/addCartSlice";
import { useSelector, useDispatch } from "react-redux";
import empty from "../assets/empty.png";
import { Link } from "react-router-dom";

export default function Carts() {
  const [code, setCode] = useState("");
  const {
    cartItems,
    shippingFee,
    discountedApplied,
    couponChecked,
    couponAlreadyUsed,
    invalidCoupon,
  } = useSelector(myCart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  // 🪄 Add modal states
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("fee", JSON.stringify(shippingFee));
  }, [shippingFee]);

  useEffect(() => {
    localStorage.setItem("discount", JSON.stringify(discountedApplied));
  }, [discountedApplied]);

  const handleCoupon = () => {
    dispatch(applyCoupon(code));
    setCode("");
  };

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
                          onClick={() => {
                            setItemToDelete(item);
                            setShowModal(true);
                          }}
                          className=" px-3 py-1 hover:text-red-500 cursor-pointer self-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-trash-icon lucide-trash"
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
                    onClick={() => {
                      setItemToDelete(item);
                      setShowModal(true);
                    }}
                    className=" px-3 py-1  hover:text-red-500 cursor-pointer self-end"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trash-icon lucide-trash"
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
                    No coupon code yet? Use "Kupal" to get free shipping!
                  </p>
                  <div className="grid gap-5 lg:flex-col lg:items-center">
                    <div className="grid gap-5 lg:flex">
                      <input
                        type="text"
                        onChange={(e) => setCode(e.target.value)}
                        value={code}
                        placeholder="Coupon Code "
                        className="w-full lg:w-[30%] p-2 border bg-white border-[#97A494] focus:border-[#222222] focus:outline-none rounded-md"
                      ></input>

                      <button
                        onClick={handleCoupon}
                        className="cursor-pointer text-white rounded-3xl w-fit bg-[#2F2F2F] px-7 py-2.5 font-bold hover:bg-[#222222]"
                      >
                        Apply Coupon
                      </button>
                    </div>

                    {couponChecked && (
                      <>
                        {discountedApplied && !couponAlreadyUsed && (
                          <p className="text-green-600 font-semibold">
                            Coupon applied! Shipping fee removed.
                          </p>
                        )}
                        {discountedApplied && couponAlreadyUsed && (
                          <p className="text-yellow-600 font-semibold">
                            Coupon already applied.
                          </p>
                        )}
                        {!discountedApplied && !couponAlreadyUsed && (
                          <p className="text-red-600 font-semibold">
                            Invalid coupon code.
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-2xl font-semibold uppercase">Cart Total</h3>
                <p className="text-[#97A494] text-md"></p>
                <p className="text-md font-semibold text-[#222222]">
                  Sub Total: ${totalPrice.toFixed(2)}
                </p>
                <p className="text-md font-semibold text-[#222222]">
                  Shipping Fee: ${shippingFee.toFixed(2)}
                </p>

                <p className="text-md font-semibold text-[#222222]">
                  Total: ${(totalPrice + shippingFee).toFixed(2)}
                </p>
                <button className="cursor-pointer text-white rounded-4xl w-fit bg-[#2F2F2F] px-8 py-4 font-bold hover:bg-[#222222]">
                  <Link to="/checkout"> Proceed To Checkout</Link>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* 🪄 Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4 text-[#222222]">
              Remove Item
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to remove{" "}
              <span className="font-semibold">{itemToDelete?.name}</span> from
              your cart?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  dispatch(removeFromCart(itemToDelete.id));
                  setShowModal(false);
                }}
                className="bg-[#2F2F2F] text-white px-5 py-2 rounded-lg hover:bg-[#1E1E1E] transition"
              >
                Yes, Remove
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
