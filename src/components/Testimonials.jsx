import person from "../assets/person-1.png";
import person2 from "../assets/person_2.jpg";
import person3 from "../assets/person_3.jpg";
import { useState } from "react";

export default function Testimonials() {
  const slides = [
    <div className="flex flex-col gap-10">
      <h2
        id="testimonials"
        className="text-center text-[#222222] font-medium text-3xl lg:text-4xl"
      >
        Testimonials
      </h2>
      <div className="flex flex-col gap-10 md:w-[60%] mx-auto">
        <p className="text-center text-[#222222]/60 text-md font-semibold leading-[2]">
          “The quality of the furniture is amazing! Every piece feels solid and
          beautifully made. My clients always compliment the designs — simple,
          elegant, and timeless.”
        </p>

        <div className="flex flex-col gap-2">
          <img
            src={person}
            alt="person"
            className="rounded-full w-[90px] self-center"
          />
          <h5 className="text-center text-[#222222] font-semibold">
            Maria Jones
          </h5>
          <p className="text-[#97A494] text-center">
            CEO, Co-Founder, XYZ Inc.
          </p>
        </div>
      </div>
    </div>,
    <div className="flex flex-col gap-10">
      <h2
        id="testimonials"
        className="text-center text-[#222222] font-medium text-3xl lg:text-4xl"
      >
        Testimonials
      </h2>
      <div className="flex flex-col gap-10 md:w-[60%] mx-auto">
        <p className="text-center text-[#222222]/60 text-md font-semibold leading-[2]">
          “I ordered a sofa and a dining set, and they arrived earlier than
          expected. The materials feel premium, and the setup was so easy.
          Definitely worth it!”
        </p>

        <div className="flex flex-col gap-2">
          <img
            src={person2}
            alt="person2"
            className="rounded-full w-[90px] self-center"
          />
          <h5 className="text-center text-[#222222] font-semibold">
            Jeremy Walker
          </h5>
          <p className="text-[#97A494] text-center">CEO, Founder, Atty.</p>
        </div>
      </div>
    </div>,
    <div className="flex flex-col gap-10">
      <h2
        id="testimonials"
        className="text-center text-[#222222] font-medium text-3xl lg:text-4xl"
      >
        Testimonials
      </h2>
      <div className="flex flex-col gap-10 md:w-[60%] mx-auto">
        <p className="text-center text-[#222222]/60 text-md font-semibold leading-[2]">
          “I love how the furniture perfectly fits my modern apartment. It’s
          stylish yet comfortable — exactly what I was looking for. Highly
          recommended!”
        </p>

        <div className="flex flex-col gap-2">
          <img
            src={person3}
            alt="person3"
            className="rounded-full w-[90px] self-center"
          />
          <h5 className="text-center text-[#222222] font-semibold">
            Patrick White
          </h5>
          <p className="text-[#97A494] text-center">CEO, Founder, Atty.</p>
        </div>
      </div>
    </div>,
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  return (
    <>
      <section
        aria-labelledby="testimonials"
        className="wrapper py-30 relative"
      >
        <div
          key={current}
          className="transition-opacity duration-500 ease-in-out opacity-100"
        >
          {slides[current]}
        </div>

        <div>
          <button
            onClick={prevSlide}
            className="absolute top-[50%] -left-6 text-2xl text-[#2f2f2f] p-2 rounded-full bg-[#DCE5E4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
          </button>
          <div
            onClick={nextSlide}
            className="absolute top-[50%] -right-6 text-2xl text-[#2f2f2f] p-2 rounded-full bg-[#DCE5E4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
