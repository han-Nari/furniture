import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";

export default function ItemDetails() {
  return (
    <>
      <section aria-labelledby="itemDetails" className="py-30">
        <div className="wrapper flex flex-col gap-5 lg:gap-0 md:flex-row">
          <h2
            id="itemDetails"
            className="hidden text-[#222222] font-medium text-3xl lg:text-4xl"
          >
            Item Details
          </h2>

          <div className="grid gap-10 lg:flex">
            <article className="flex gap-5">
              <img
                src={product1}
                alt="product1"
                className="bg-[#DCE5E4] rounded-2xl w-[120px]"
              />
              <div className="grid gap-1">
                <h5 className="text-[#2f2f2f] font-bold">Nordic Chair</h5>
                <p className="text-[#222222]/70  text-sm font-semibold">
                  A minimalist classic that blends clean lines and natural wood
                  tones — perfect for modern, cozy interiors.
                </p>
                <button className="w-fit text-[#222222]">Read More</button>
              </div>
            </article>

            <article className="flex gap-5">
              <img
                src={product2}
                alt="product2"
                className="bg-[#DCE5E4] rounded-2xl w-[120px]"
              />
              <div className="grid gap-1">
                <h5 className="text-[#2f2f2f] font-bold">Kruzo Aero Chair</h5>
                <p className="text-[#222222]/70  text-sm font-semibold">
                  Designed for comfort and style, this sleek chair combines
                  smooth curves with lightweight durability.
                </p>
                <button className="w-fit text-[#222222]">Read More</button>
              </div>
            </article>

            <article className="flex gap-5">
              <img
                src={product3}
                alt="product3"
                className="bg-[#DCE5E4] rounded-2xl w-[120px]"
              />
              <div className="grid gap-1">
                <h5 className="text-[#2f2f2f] font-bold">Ergonomic Chair</h5>
                <p className="text-[#222222]/70  text-sm font-semibold">
                  Built to support your posture all day long, offering maximum
                  comfort for work or relaxation.
                </p>
                <button className="w-fit text-[#222222]">Read More</button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
