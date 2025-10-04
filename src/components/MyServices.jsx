import truck from "../assets/truck.svg";
import support from "../assets/support.svg";
import returns from "../assets/return.svg";
import bag from "../assets/bag.svg";
import yellowDot from "../assets/dots-yellow.svg";
import choose from "../assets/why-choose-us-img.jpg";

export default function MyServices() {
  return (
    <>
      <section aria-labelledby="chooUse" className="py-30 ">
        <div className="wrapper ">
          <div className="flex flex-col gap-5">
            <div className="grid gap-10 lg:grid-cols-4 ">
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
                    Get your furniture delivered quickly and safely — at no
                    extra cost.
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
                    A smooth, simple shopping experience from browsing to
                    checkout.
                  </p>
                </div>
              </article>

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
                    Our friendly team is always here to help, day or night.
                  </p>
                </div>
              </article>

              <article className="grid gap-4">
                <div className="relative w-fit">
                  <img src={returns} alt="returns" />
                  <p className="bg-[#CBD4D0] absolute h-8 w-8 rounded-full bottom-0 -right-2 -z-1"></p>
                </div>
                <div>
                  <h5 className="text-sm text-[#222222] font-medium">
                    Custom Design
                  </h5>
                  <p className="text-[#222222]/70 text-sm font-md leading-[2]">
                    We help you create furniture that fits your space and style
                    — made just for you.
                  </p>
                </div>
              </article>

              <article className="grid gap-4">
                <div className="relative w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-armchair-icon lucide-armchair"
                  >
                    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                    <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
                    <path d="M5 18v2" />
                    <path d="M19 18v2" />
                  </svg>
                  <p className="bg-[#CBD4D0] absolute h-8 w-8 rounded-full bottom-0 -right-2 -z-1"></p>
                </div>
                <div>
                  <h5 className="text-sm text-[#222222] font-medium">
                    Furniture Assembly
                  </h5>
                  <p className="text-[#222222]/70 text-sm font-md leading-[2]">
                    Sit back and relax — our team will set up your furniture so
                    it’s ready to use.
                  </p>
                </div>
              </article>

              <article className="grid gap-4">
                <div className="relative w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-hand-fist-icon lucide-hand-fist"
                  >
                    <path d="M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0" />
                    <path d="M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5" />
                    <path d="M9 5A2 2 0 1 0 5 5V10" />
                    <path d="M9 7V4A2 2 0 1 1 13 4V7.268" />
                  </svg>
                  <p className="bg-[#CBD4D0] absolute h-8 w-8 rounded-full bottom-0 -right-2 -z-1"></p>
                </div>
                <div>
                  <h5 className="text-sm text-[#222222] font-medium">
                    After-Sales Support
                  </h5>
                  <p className="text-[#222222]/70 text-sm font-md leading-[2]">
                    We’re here even after your purchase, ready to assist with
                    any questions or concerns.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
