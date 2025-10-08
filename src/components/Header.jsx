import { useState } from "react";
import { NavLink } from "react-router-dom";
import cart from "../assets/cart.svg";
import user from "../assets/user.svg";
import { useSelector } from "react-redux";
import { myCart } from "../features/addCartSlice";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useSelector(myCart);
  const itemCarts = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navBar = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/about", label: "About us" },
    { path: "/services", label: "Services" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact us" },
  ];

  return (
    <header className="bg-[#3B5D50] py-10">
      <div className="wrapper flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl text-white font-mono">Furni.</h2>
          <button
            onClick={openMenu}
            className="lg:hidden text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isOpen
              ? "max-h-[500px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-5"
          }  overflow-hidden lg:overflow-visible lg:opacity-100 lg:translate-y-0 lg:max-h-none lg:flex transition-all duration-500 ease-in-out`}
        >
          <ul className="flex flex-col gap-10 lg:flex-row transition duration-300">
            {navBar.map(({ path, label }) => (
              <li key={path} className="text-md font-semibold">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `
                    relative inline-block text-[#97A494] transition-all duration-300 
                    lg:hover:text-yellow-400 
                    lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-[-5px]
                    lg:after:w-full lg:after:h-[4px] lg:after:bg-yellow-400 lg:after:scale-x-0 
                    lg:after:origin-left lg:after:transition-transform lg:after:duration-500
                    lg:hover:after:scale-x-100
                    ${
                      isActive
                        ? "text-white lg:after:scale-x-100 lg:after:bg-yellow-400"
                        : ""
                    }
                  `
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}

            <li className="relative w-fit">
              <NavLink to="/cart">
                <img src={cart} alt="cart" />
                <p className="absolute text-xs -top-2 -right-3 grid place-content-center text-white bg-red-500 h-4 w-4 rounded-full">
                  {itemCarts}
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <img src={user} alt="user" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
