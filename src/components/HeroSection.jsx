import couch from "../assets/couch.png";
import whiteDot from "../assets/dots-light.svg";
export default function HeroSection(props) {
  return (
    <>
      <main className="bg-[#3B5D50] py-10">
        <div className="wrapper grid gap-20 grid-cols-[repeat(auto-fit,minmax(25rem,1fr))]">
          <section className="grid gap-8 md:flex md:flex-col md:py-5">
            <h1 className="text-balance text-white text-3xl font-bold md:text-6xl leading-[1.2]">
              {props.title}
            </h1>
            <p className=" text-balance text-[#97A494] text-md font-semibold">
              {props.intro}
            </p>
            <div className="flex gap-2  [&>*]:py-2.5 [&>*]:px-4 [&>*]:rounded-4xl [&>*]:text-md [&>*]:font-semibold [&>*]:cursor-pointer">
              <button className="bg-[#F9BF29] text-black hover:bg-yellow-500">
                {" "}
                Shop Now
              </button>
              <button className="text-white border-2 border-[#97A494] hover:border-white">
                Discover More
              </button>
            </div>
          </section>
          <section className="relative ">
            <div className="flex ">
              <img src={couch} alt="couch" className="z-1" />
              <img src={whiteDot} alt="whiteDot" className="absolute right-0" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
