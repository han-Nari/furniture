import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import product4 from "../assets/chair.jpg";
import product5 from "../assets/chair2.jpg";
import product6 from "../assets/chair3.jpg";
import product7 from "../assets/chair4.jpg";
import product8 from "../assets/chair5.jpg";

export default function ShopList() {
  return (
    <>
      <section className="py-30">
        <div className="wrapper">
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
              <p className=" text-white text-xl h-8 w-8 grid place-content-center bg-[#2f2f2f] rounded-full absolute -bottom-4 z-10 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <i className="fa-solid fa-plus"></i>
              </p>
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
              <p className=" text-white text-xl h-8 w-8 grid place-content-center bg-[#2f2f2f] rounded-full absolute -bottom-4 z-10 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <i className="fa-solid fa-plus"></i>
              </p>
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
              <p className=" text-white text-xl h-8 w-8 grid place-content-center bg-[#2f2f2f] rounded-full absolute -bottom-4 z-10 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <i className="fa-solid fa-plus"></i>
              </p>
            </div>
          </div>

          <div className="grid place-content-center gap-10 [&>div]:py-10 [&>div]:relative [&>div]:cursor-pointer md:flex lg:flex lg:flex-3 ">
            <div className="group relative text-center grid gap-10 font-bold px-5 py-7  rounded-2xl cursor-pointer  ">
              <img
                src={product5}
                alt="product1"
                className="transition-transform duration-500 group-hover:-translate-y-3"
              />
              <span className="absolute inset-0 bg-[#DCE5E4] rounded-2xl scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-60 -z-10"></span>
              <div>
                <h5 className="text-[#2f2f2f]">Oslo Wooden Armchair</h5>
                <p className="text-[#2f2f2f] text-xl">$150.00</p>
              </div>
              <p className=" text-white text-xl h-8 w-8 grid place-content-center bg-[#2f2f2f] rounded-full absolute -bottom-4 z-10 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <i className="fa-solid fa-plus"></i>
              </p>
            </div>
            <div className="group relative text-center grid gap-10  font-bold px-5 py-7 rounded-2xl cursor-pointer">
              <img
                src={product6}
                alt="product2"
                className="transition-transform duration-500 group-hover:-translate-y-3"
              />
              <span className="absolute inset-0 bg-[#DCE5E4] rounded-2xl scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-60 -z-10"></span>
              <div>
                <h5 className="text-[#2f2f2f]">Kruzo Aero Chair</h5>
                <p className="text-[#2f2f2f] text-xl">$70.00</p>
              </div>
              <p className=" text-white text-xl h-8 w-8 grid place-content-center bg-[#2f2f2f] rounded-full absolute -bottom-4 z-10 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <i className="fa-solid fa-plus"></i>
              </p>
            </div>
            <div className="group relative text-center grid gap-10  font-bold px-5 py-7 rounded-2xl cursor-pointer">
              <img
                src={product7}
                alt="product3"
                className="transition-transform duration-500 group-hover:-translate-y-3"
              />
              <span className="absolute inset-0 bg-[#DCE5E4] rounded-2xl scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-60 -z-10"></span>
              <div>
                <h5 className="text-[#2f2f2f]">Nordic Comfort Chair</h5>
                <p className="text-[#2f2f2f] text-xl">$115.00</p>
              </div>
              <p className=" text-white text-xl h-8 w-8 grid place-content-center bg-[#2f2f2f] rounded-full absolute -bottom-4 z-10 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <i className="fa-solid fa-plus"></i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
