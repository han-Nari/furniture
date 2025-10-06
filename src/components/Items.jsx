import { addToCart } from "../features/addCartSlice";
import { useSelector, useDispatch } from "react-redux";

import ItemLists from "./itemLists";

export default function Items(props) {
  const dispatch = useDispatch();
  const { items: furniItems } = ItemLists();
  return (
    <>
      <section aria-labelledby="items" className="py-30 ">
        <div className="wrapper flex flex-col gap-10">
          <div className="flex flex-col gap-5 lg:flex-1">
            <h2
              id="items"
              className="text-[#222222] font-medium text-3xl lg:text-4xl"
            >
              Crafted with excellent material.
            </h2>
            <p className="text-[#222222]/70 text-md font-md leading-[2]">
              {props.intro}
            </p>
            <button className="cursor-pointer text-white rounded-3xl w-fit bg-[#2F2F2F] px-7 py-2.5 font-bold hover:bg-[#222222]">
              Discover More
            </button>
          </div>
          <div className="">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {furniItems.slice(0, 3).map((items) => (
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
