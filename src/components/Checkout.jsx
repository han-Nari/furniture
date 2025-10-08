import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCountry,
  setName,
  setLastName,
  setCompany,
  setAddress,
  setStates,
  setApartment,
  setZip,
  setEmail,
  setPhone,
  setMessage,
  clearForm,
  saved,
} from "../features/formSlice";
import { useEffect, useState } from "react";

import { clearCart, myCart, clearShippingFee } from "../features/addCartSlice";

export default function Checkout() {
  const {
    country,
    names,
    lastName,
    companyName,
    address,
    states,
    apartment,
    zip,
    email,
    phone,
    message,
    saved: saveLists,
  } = useSelector((state) => state.accountForm);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [active, setIsActive] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const { cartItems, shippingFee } = useSelector(myCart);

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

  const activeState = (option) => {
    setIsActive((prev) => (prev === option ? null : option));
  };

  const toggleHandle = () => {
    setToggle((prev) => !prev);
  };

  const formInput = (e) => {
    e.preventDefault();

    if (
      names.trim() !== "" &&
      lastName.trim() !== "" &&
      companyName.trim() !== "" &&
      address.trim() !== "" &&
      states.trim() !== "" &&
      email.trim() !== ""
    ) {
      setError("");
      navigate("/thankyou");
    } else {
      setError("Fill up the required forms");
    }

    dispatch(
      saved({
        country: country.trim(),
        names: names.trim(),
        lastName: lastName.trim(),
        companyName: companyName.trim(),
        address: address.trim(),
        states: states.trim(),
        apartment: apartment.trim(),
        zip: zip.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(saveLists));
  }, [saveLists]);

  return (
    <>
      <section aria-labelledby="checkout" className="py-20">
        <div className="wrapper flex flex-col gap-10">
          <h4 className="p-5 flex gap-1 text-[#222222]/80 text-md border-1 border-[#767676]/30 rounded-sm">
            Returning customer?
            <Link
              to="/"
              className="underline text-[#222222] font-semibold hover:no-underline"
            >
              Click here
            </Link>
            to login
          </h4>
          <form
            onSubmit={formInput}
            className="grid gap-10 w-full p-10 shadow-md rounded-xl lg:flex [&>*]:flex-1"
          >
            <article className="flex-2">
              <h2
                id="checkout"
                className=" text-[#222222] font-semibold text-2xl lg:text-3xl"
              >
                Billing Details
              </h2>

              <div className="flex flex-col gap-4 [&>select,div>input]:border-1 [&>select,div>input]:border-[#222222]/30 [&>select,div>input]:focus:outline-none [&>select,div>input]:focus:border [&>select,div>input]:focus:border-[#3B5D50] [&>select,div>input]:p-2 [&>select,div>input]:rounded-md [&>select,div>input]:w-full">
                <p className="text-2xl text-red-500">{error}</p>
                <select
                  name="country"
                  value={country}
                  onChange={(e) => dispatch(setCountry(e.target.value))}
                  id="country"
                  className="border rounded-lg p-2 w-full"
                >
                  <option value="">Select your country</option>
                  <option value="philippines">Philippines</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="japan">Japan</option>
                  <option value="china">China</option>
                  <option value="south-korea">South Korea</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="italy">Italy</option>
                  <option value="spain">Spain</option>
                  <option value="brazil">Brazil</option>
                  <option value="india">India</option>
                  <option value="mexico">Mexico</option>
                  <option value="uae">United Arab Emirates</option>
                  <option value="russia">Russia</option>
                  <option value="south-africa">South Africa</option>
                  <option value="singapore">Singapore</option>
                  <option value="thailand">Thailand</option>
                  <option value="vietnam">Vietnam</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="indonesia">Indonesia</option>
                  <option value="turkey">Turkey</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="sweden">Sweden</option>
                  <option value="switzerland">Switzerland</option>
                  <option value="denmark">Denmark</option>
                  <option value="norway">Norway</option>
                  <option value="new-zealand">New Zealand</option>
                </select>

                <div className="flex gap-5">
                  <input
                    value={names}
                    onChange={(e) => dispatch(setName(e.target.value))}
                    type="text"
                    placeholder="Enter firstname"
                  />
                  <input
                    value={lastName}
                    onChange={(e) => dispatch(setLastName(e.target.value))}
                    type="text"
                    placeholder="Enter lastname"
                  />
                </div>

                <div>
                  <input
                    value={companyName}
                    onChange={(e) => dispatch(setCompany(e.target.value))}
                    type="text"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <input
                    value={address}
                    onChange={(e) => dispatch(setAddress(e.target.value))}
                    type="text"
                    placeholder="Street Address"
                  />
                </div>

                <div>
                  <input
                    value={apartment}
                    onChange={(e) => dispatch(setApartment(e.target.value))}
                    type="text"
                    placeholder="Apartment, suite, unit etc. (Optional)"
                  />
                </div>

                <div className="flex gap-5">
                  <input
                    value={states}
                    onChange={(e) => dispatch(setStates(e.target.value))}
                    type="text"
                    placeholder="State / Country"
                  />
                  <input
                    value={zip}
                    onChange={(e) => dispatch(setZip(e.target.value))}
                    type="text"
                    placeholder="Postal / Zip"
                  />
                </div>

                <div className="flex gap-5">
                  <input
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    type="text"
                    placeholder="Email Address"
                  />
                  <input
                    value={phone}
                    onChange={(e) => dispatch(setPhone(e.target.value))}
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 py-5">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="account"
                        id="account"
                        checked={toggle}
                        onChange={toggleHandle}
                        className="cursor-pointer"
                      />
                      <label
                        htmlFor="account"
                        className="text-md font-semibold text-[#222222] cursor-pointer select-none"
                      >
                        Create an account?
                      </label>
                    </div>

                    <div
                      className={`grid gap-5 text-md text-[#222222]/70 mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
                        toggle ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p>
                        Create an account by entering the information below. If
                        you are a returning customer please login at the top of
                        the page.
                      </p>
                      <input
                        type="text"
                        placeholder="Account Password"
                        className="border-1 border-[#222222]/30 focus:outline-none focus:border focus:border-[#3B5D50] p-2 rounded-md w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 [&>textarea]:p-5">
                  <label
                    htmlFor="order"
                    className="font-semibold text-[#222222]"
                  >
                    Order Notes
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => dispatch(setMessage(e.target.value))}
                    name="order"
                    id="order"
                    placeholder="Write your notes here (Optional)"
                    className="border-1 border-[#222222]/30 focus:outline-none focus:border focus:border-[#3B5D50] p-2 rounded-md"
                  ></textarea>
                </div>
              </div>
            </article>

            <article className="flex flex-col gap-5 ">
              <h2
                id="checkout"
                className=" text-[#222222] font-semibold text-2xl lg:text-3xl"
              >
                Your Order
              </h2>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 [&>div]:flex [&>div]:justify-between">
                  <div className="text-[#222222] text-xl font-bold flex justify-between">
                    <h5>Product</h5>
                    <p>Total</p>
                  </div>
                  {cartItems.map((item, id) => (
                    <>
                      <div className="text-md">
                        <p>
                          {item.name} - x{item.quantity}
                        </p>
                        <p className="font-semibold text-[#222222]">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </>
                  ))}

                  <div className="text-md font-semibold text-[#222222]">
                    <p> Shipping Fee:</p>
                    <p>${shippingFee.toFixed(2)}</p>
                  </div>

                  <div className="text-md font-semibold text-[#222222]">
                    <p>Total:</p>
                    <p>${(totalPrice + shippingFee).toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="border-1 p-2 border-[#767676]/30 rounded-sm">
                    <button onClick={() => activeState("transfer")}>
                      <h5 className="w-fit text-xl font-semibold text-[#222222] underline hover:no-underline cursor-pointer">
                        Direct Bank Transfer
                      </h5>
                    </button>
                    <p
                      className={`text-md text-[#222222]/70 mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
                        active === "transfer"
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will be processed once the funds have cleared in our
                      account.
                    </p>
                  </div>

                  <div className="border-1 p-2 border-[#767676]/30 rounded-sm">
                    <button onClick={() => activeState("cheque")}>
                      <h5 className="w-fit text-xl font-semibold text-[#222222] underline hover:no-underline cursor-pointer">
                        Cheque Payment
                      </h5>
                    </button>
                    <p
                      className={`text-md text-[#222222]/70 mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
                        active === "cheque"
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      Send your cheque to our company address with your Order ID
                      written on the back. Your order will be shipped once the
                      cheque has been received and cleared.
                    </p>
                  </div>

                  <div className="border-1 p-2 border-[#767676]/30 rounded-sm">
                    <button onClick={() => activeState("paypal")}>
                      <h5 className="w-fit text-xl font-semibold text-[#222222] underline hover:no-underline cursor-pointer">
                        Paypal
                      </h5>
                    </button>
                    <p
                      className={`text-md text-[#222222]/70 mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
                        active === "paypal"
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      Pay securely through PayPal using your account or credit
                      card. Once the payment is confirmed, your order will be
                      processed immediately.
                    </p>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="cursor-pointer text-white rounded-3xl w-fit bg-[#2F2F2F] px-7 py-2.5 font-bold hover:bg-[#222222]"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </form>
          {/* <ul>
            {saveLists.map((item, id) => (
              <li key={id}>
                {item.country} - {item.names} - {item.lastName} -{" "}
                {item.companyName} - {item.address} - {item.states}{" "}
                {item.apartment} - {item.zip} - {item.email} - {item.phone} -{" "}
                {item.message}
              </li>
            ))}
          </ul> */}
        </div>
      </section>
    </>
  );
}
