import person1 from "../assets/person_1.jpg";
import person2 from "../assets/person_2.jpg";
import person3 from "../assets/person_3.jpg";
import person4 from "../assets/person_4.jpg";

export default function Team() {
  return (
    <>
      <section aria-labelledby="team" className="py-30">
        <div className="wrapper grid gap-20">
          <h2
            id="items"
            className="text-[#222222] text-center font-medium text-3xl lg:text-4xl"
          >
            Our Team
          </h2>
          <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center">
            <article className="grid gap-5">
              <div className="grid gap-3">
                <img src={person1} alt="person1" />
                <h5 className="text-2xl text-[#222222] underline hover:no-underline cursor-pointer">
                  Lawson Arnold
                </h5>
                <p className="text-[#222222]/60">CEO, Founder, Atty</p>
              </div>

              <div className="grid gap-3">
                <p className="text-[#222222]/60 leading-[2]">
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <a href="" className="font-semibold text-md underline">
                  Learn more
                </a>
              </div>
            </article>

            <article className="grid gap-5">
              <div className="grid gap-3">
                <img src={person2} alt="person2" />
                <h5 className="text-2xl text-[#222222] underline hover:no-underline cursor-pointer">
                  Jeremy Walker
                </h5>
                <p className="text-[#222222]/60">CEO, Founder, Atty</p>
              </div>

              <div className="grid gap-3">
                <p className="text-[#222222]/60 leading-[2]">
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <a href="" className="font-semibold text-md underline">
                  Learn more
                </a>
              </div>
            </article>

            <article className="grid gap-5">
              <div className="grid gap-3">
                <img src={person3} alt="person3" />
                <h5 className="text-2xl text-[#222222] underline hover:no-underline cursor-pointer">
                  Patrick White
                </h5>
                <p className="text-[#222222]/60">CEO, Founder, Atty</p>
              </div>

              <div className="grid gap-3">
                <p className="text-[#222222]/60 leading-[2]">
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <a href="" className="font-semibold text-md underline">
                  Learn more
                </a>
              </div>
            </article>

            <article className="grid gap-5">
              <div className="grid gap-3">
                <img src={person4} alt="person4" />
                <h5 className="text-2xl text-[#222222] underline hover:no-underline cursor-pointer">
                  Kathryn Ryan
                </h5>
                <p className="text-[#222222]/60">CEO, Founder, Atty</p>
              </div>

              <div className="grid gap-3">
                <p className="text-[#222222]/60 leading-[2]">
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <a href="" className="font-semibold text-md underline">
                  Learn more
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
