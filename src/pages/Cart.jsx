import Carts from "../components/Carts";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Cart() {
  return (
    <>
      <Header />

      <HeroSection
        title="Your Cart"
        intro="Here’s what you’ve added! Double-check your favorites before completing your order."
      />
      <Carts />

      <Footer />
    </>
  );
}

// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, clearCart, myCart } from "../features/addCartSlice";

// export default function Cart() {
//   const { cartItems } = useSelector(myCart);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.id}>
//                 {item.name} (x{item.quantity}) - ${item.price * item.quantity}
//                 <button onClick={() => dispatch(removeFromCart(item.id))}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
//         </>
//       )}
//     </div>
//   );
// }
