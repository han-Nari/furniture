import truck from "../assets/truck.svg";
import support from "../assets/support.svg";
import returns from "../assets/return.svg";
import bag from "../assets/bag.svg";
import yellowDot from "../assets/dots-yellow.svg";
import choose from "../assets/why-choose-us-img.jpg";

export default function ChooseUs(props) {
  return (
    <>
      <section aria-labelledby="chooUse" className="py-30 ">
        <div className="wrapper flex-wrap flex flex-col gap-10  md:flex-row lg:flex-row  lg:[&>*]:flex-1">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h2
                id="chooUse"
                className="text-[#222222] font-medium text-3xl lg:text-4xl"
              >
                Why Choose Us
              </h2>
              <p className="text-[#222222]/70 text-md font-md leading-[2]">
                We believe your home deserves furniture that’s built with care,
                designed with love, and made to last for years to come.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <article className="grid gap-4">
                  <div className="relative w-fit">
                    <img src={truck} alt="truck" />
                    <p className="bg-[#CBD4D0] absolute h-8 w-8 rounded-full bottom-0 -right-2 -z-1"></p>
                  </div>
                  <div>
                    <h5 className="text-sm text-[#222222] font-medium">
                      Fast & Free Shipping
                    </h5>
                    <p className="text-[#222222]/70 text-sm font-md leading-[2]">
                      {props.fee}
                    </p>
                  </div>
                </article>

                <article className="grid gap-4">
                  <div className="relative w-fit">
                    <img src={bag} alt="bag" />
                    <p className="bg-[#CBD4D0] absolute h-8 w-8 rounded-full bottom-0 -right-2 -z-1"></p>
                  </div>
                  <div>
                    <h5 className="text-sm text-[#222222] font-medium">
                      Easy to Shop
                    </h5>
                    <p className="text-[#222222]/70 text-sm font-md leading-[2]">
                      {props.shop}
                    </p>
                  </div>
                </article>
              </div>

              <div className="flex gap-10">
                <article className="grid gap-4">
                  <div className="relative w-fit">
                    <img src={support} alt="truck" />
                    <p className="bg-[#CBD4D0] absolute h-8 w-8 rounded-full bottom-0 -right-2 -z-1"></p>
                  </div>
                  <div>
                    <h5 className="text-sm text-[#222222] font-medium">
                      24/7 Support
                    </h5>
                    <p className="text-[#222222]/70 text-sm font-md leading-[2]">
                      {props.support}
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 pl-4">
                  <div className="relative w-fit">
                    <img src={returns} alt="returns" />
                    <p className="bg-[#CBD4D0] absolute h-8 w-8 rounded-full bottom-0 -right-2 -z-1"></p>
                  </div>
                  <div>
                    <h5 className="text-sm text-[#222222] font-medium">
                      Hassle Free Returns
                    </h5>
                    <p className="text-[#222222]/70 text-sm font-md leading-[2]">
                      {props.return}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="relative flex justify-end  mx-auto h-[80vh]">
            <img
              src={yellowDot}
              alt="yellowDot"
              className="absolute  left-0 top-0 -z-1"
            />
            <img src={choose} alt="choose" className="img" />
          </div>
        </div>
      </section>
    </>
  );
}
