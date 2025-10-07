import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/addCartSlice";
import { useState } from "react";
import ItemLists from "./itemLists";

export default function ShopList() {
  const dispatch = useDispatch();
  const { items: furniItems } = ItemLists();

  // 🪄 State for modal visibility and item
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setSelectedItem(item);
    setShowModal(true);
    // Auto close modal after 2 seconds
    setTimeout(() => setShowModal(false), 2000);
  };

  return (
    <>
      <section className="py-30">
        <div className="wrapper">
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {furniItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative text-center grid gap-10 justify-center font-bold px-5 py-7 rounded-2xl cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="transition-transform duration-500 group-hover:-translate-y-3"
                  />
                  <span className="absolute inset-0 bg-[#DCE5E4] rounded-2xl scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-60 -z-10"></span>

                  <div>
                    <h5 className="text-[#2f2f2f]">{item.name}</h5>
                    <p className="text-[#2f2f2f] text-xl">${item.price}</p>
                  </div>

                  {/* 🛒 Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="text-white w-fit mx-auto p-2 px-5 bg-[#3B5D50] hover:bg-[#314D43] font-semibold rounded-sm cursor-pointer"
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 🪄 Modal Message */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-lg font-semibold mb-2 text-[#2F2F2F]">
              Added to Cart!
            </h3>
            <p className="text-gray-600">
              {selectedItem?.name} has been successfully added.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
