import design from "../assets/design.png";

export default function ModernDesign() {
  return (
    <>
      <section aria-labelledby="ModernDesign">
        <div className="wrapper flex flex-col gap-5 lg:gap-0 md:flex-row">
          <div className="lg:flex-2">
            <img src={design} alt="design" />
          </div>
          <div className="flex flex-col gap-5 lg:flex-1 lg:py-23">
            <h2
              id="ModernDesign"
              className="text-[#222222] font-medium text-3xl lg:text-4xl"
            >
              We Help You Make Modern Interior Design
            </h2>
            <p className="text-[#222222]/70 text-md font-md leading-[2]">
              Your dream home starts with the right design. We’re here to help
              you create stylish, comfortable spaces that reflect who you are.
            </p>
            <ul className="list-disc flex gap-10 wrapper">
              <div className="grid gap-5">
                <li class="text-[#222222]/70">
                  Our experts help you choose pieces that perfectly match your
                  style and space.
                </li>
                <li class="text-[#222222]/70">
                  Explore collections that blend clean lines, natural textures,
                  and lasting beauty.
                </li>
              </div>
              <div className="grid gap-5">
                <li class="text-[#222222]/70">
                  Crafted from durable materials and built to stand the test of
                  time.
                </li>
                <li class="text-[#222222]/70">
                  From living rooms to workspaces — we help you design every
                  corner with purpose.
                </li>
              </div>
            </ul>
            <button className="cursor-pointer text-white rounded-3xl w-fit bg-[#2F2F2F] px-7 py-2.5 font-bold hover:bg-[#222222]">
              Discover More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
