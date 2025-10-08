import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myCart } from "../features/addCartSlice"; // ✅ same selector you used in Checkout

export default function Receipt() {
  // ✅ accountForm slice
  const {
    country,
    names,
    lastName,
    companyName,
    address,
    apartment,
    states,
    zip,
    email,
    phone,
    message,
  } = useSelector((state) => state.accountForm);

  // ✅ use structured selector from addCartSlice
  const { cartItems, shippingFee } = useSelector(myCart);

  // ✅ calculate total
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="wrapper bg-white shadow-lg rounded-xl p-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#222222] mb-8 text-center">
          🧾 Order Receipt
        </h2>

        <div className="border-b border-gray-300 pb-6 mb-6">
          <h3 className="text-xl font-semibold text-[#3B5D50] mb-2">
            Billing Information
          </h3>
          <ul className="text-[#222222]/80 space-y-1">
            <li>
              <strong>Name:</strong> {names} {lastName}
            </li>
            <li>
              <strong>Company:</strong> {companyName || "N/A"}
            </li>
            <li>
              <strong>Address:</strong> {address}
              {apartment ? `, ${apartment}` : ""}
            </li>
            <li>
              <strong>State/Country:</strong> {states}
            </li>
            <li>
              <strong>ZIP:</strong> {zip}
            </li>
            <li>
              <strong>Country:</strong> {country}
            </li>
            <li>
              <strong>Email:</strong> {email}
            </li>
            <li>
              <strong>Phone:</strong> {phone}
            </li>
          </ul>
        </div>

        <div className="border-b border-gray-300 pb-6 mb-6">
          <h3 className="text-xl font-semibold text-[#3B5D50] mb-2">
            Order Summary
          </h3>
          <div className="flex flex-col gap-3">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between border-b border-gray-200 pb-1 text-[#222222]"
              >
                <p>
                  {item.name} × {item.quantity}
                </p>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="flex justify-between font-semibold text-[#222222] mt-2">
              <p>Shipping Fee:</p>
              <p>${shippingFee.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold text-lg text-[#3B5D50] mt-3">
              <p>Total:</p>
              <p>${(totalPrice + shippingFee).toFixed(2)}</p>
            </div>
          </div>
        </div>

        {message && (
          <div className="border-b border-gray-300 pb-6 mb-6">
            <h3 className="text-xl font-semibold text-[#3B5D50] mb-2">
              Order Notes
            </h3>
            <p className="text-[#222222]/80">{message}</p>
          </div>
        )}

        <div className="text-center mt-10 flex flex-col gap-4">
          <p className="text-lg font-medium text-[#3B5D50]">
            Thank you for your purchase! 🎉
          </p>
          <Link
            to="/"
            className="inline-block bg-[#3B5D50] hover:bg-[#2F2F2F] text-white font-semibold py-2 px-6 rounded-full transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
