import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/addCartSlice";
import ItemLists from "./itemLists";

export default function ShopList() {
  const dispatch = useDispatch();
  const { items: furniItems } = ItemLists();
  return (
    <>
      <section className="py-30">
        <div className="wrapper">
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {furniItems.map((items) => (
                <div className="group relative text-center grid gap-10 justify-center font-bold px-5 py-7  rounded-2xl cursor-pointer  ">
                  <img
                    src={items.img}
                    alt="product1"
                    className="transition-transform duration-500 group-hover:-translate-y-3"
                  />
                  <span className="absolute inset-0 bg-[#DCE5E4] rounded-2xl scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-60 -z-10"></span>
                  <div>
                    <h5 className="text-[#2f2f2f]">{items.name}</h5>
                    <p className="text-[#2f2f2f] text-xl">${items.price}</p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(addToCart(items));
                      alert(`Add To Cart Success!`);
                    }}
                    className="text-white w-fit mx-auto p-2 px-5  bg-[#3B5D50] hover:bg-[#314D43] font-semibold rounded-sm cursor-pointer"
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
