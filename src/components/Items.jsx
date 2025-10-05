import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";

export default function Items(props) {
  return (
    <>
      <section aria-labelledby="items" className="py-30 ">
        <div className="wrapper flex flex-col gap-10 lg:gap-0 lg:flex-row">
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
          <div className="grid place-content-center gap-10 [&>div]:py-10 [&>div]:relative [&>div]:cursor-pointer md:flex lg:flex lg:flex-3 ">
            <div className="group relative text-center grid gap-10 font-bold px-5 py-7  rounded-2xl cursor-pointer  ">
              <img
                src={product1}
                alt="product1"
                className="transition-transform duration-500 group-hover:-translate-y-3"
              />
              <span className="absolute inset-0 bg-[#DCE5E4] rounded-2xl scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-60 -z-10"></span>
              <div>
                <h5 className="text-[#2f2f2f]">Nordic Chair</h5>
                <p className="text-[#2f2f2f] text-xl">$50.00</p>
              </div>
              <button className="text-white w-fit mx-auto p-2 px-5  bg-[#3B5D50] hover:bg-[#314D43] font-semibold rounded-sm cursor-pointer">
                Add To Cart
              </button>
            </div>

            <div className="group relative text-center grid gap-10  font-bold px-5 py-7 rounded-2xl cursor-pointer">
              <img
                src={product2}
                alt="product2"
                className="transition-transform duration-500 group-hover:-translate-y-3"
              />
              <span className="absolute inset-0 bg-[#DCE5E4] rounded-2xl scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-60 -z-10"></span>
              <div>
                <h5 className="text-[#2f2f2f]">Kruzo Aero Chair</h5>
                <p className="text-[#2f2f2f] text-xl">$70.00</p>
              </div>
              <button className="text-white w-fit mx-auto p-2 px-5  bg-[#3B5D50] hover:bg-[#314D43] font-semibold rounded-sm cursor-pointer">
                Add To Cart
              </button>
            </div>

            <div className="group relative text-center grid gap-10  font-bold px-5 py-7 rounded-2xl cursor-pointer">
              <img
                src={product3}
                alt="product3"
                className="transition-transform duration-500 group-hover:-translate-y-3"
              />
              <span className="absolute inset-0 bg-[#DCE5E4] rounded-2xl scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-60 -z-10"></span>
              <div>
                <h5 className="text-[#2f2f2f]">Ergonomic Chair</h5>
                <p className="text-[#2f2f2f] text-xl">$48.00</p>
              </div>
              <button className="text-white w-fit mx-auto p-2 px-5  bg-[#3B5D50] hover:bg-[#314D43] font-semibold rounded-sm cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
