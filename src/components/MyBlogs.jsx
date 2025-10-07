import post1 from "../assets/post-1.jpg";
import post2 from "../assets/post-2.jpg";
import post3 from "../assets/post-3.jpg";
import post4 from "../assets/sofa.jpg";
import post5 from "../assets/sofa2.jpg";
import post6 from "../assets/sofa3.jpg";

export default function MyBlogs() {
  return (
    <>
      <section aria-labelledby="blogs" className="py-30 pb-50">
        <div className="wrapper grid gap-20">
          <div className="flex items-center justify-between">
            <h2
              id="blogs"
              className="text-[#222222] font-medium text-3xl lg:text-4xl"
            >
              Our Blogs
            </h2>

            <a
              href="#"
              className="font-bold underline text-[#222222]/70 text-sm"
            >
              All Posts
            </a>
          </div>
          <div className="grid gap-10  lg:grid-cols-3  [&>article]:relative [&>article]:cursor-pointer">
            <article className="grid gap-3">
              <img src={post1} alt="post1" className=" rounded-2xl" />
              <div className="px-4 grid gap-3">
                <h5 className="text-[#222222] font-bold text-md">
                  First Time Home Owner Ideas
                </h5>
                <p className="text-[#222222] font-bold">
                  <span className="text-[#97A494]"> by</span> Kristin Watson{" "}
                  <span className="text-[#97A494]"> on</span> Dec 19, 2021
                </p>
              </div>
            </article>

            <article className="grid gap-3">
              <img src={post2} alt="post2" className="rounded-2xl" />
              <div className="px-4 grid gap-3">
                <h5 className="text-[#222222] font-bold text-md">
                  First Time Home Owner Ideas
                </h5>
                <p className="text-[#222222] font-bold">
                  <span className="text-[#97A494]"> by</span> Kristin Watson{" "}
                  <span className="text-[#97A494]"> on</span> Dec 19, 2021
                </p>
              </div>
            </article>

            <article className="grid gap-3">
              <img src={post3} alt="post3" className="rounded-2xl" />
              <div className="px-4 grid gap-3">
                <h5 className="text-[#222222] font-bold text-md">
                  First Time Home Owner Ideas
                </h5>
                <p className="text-[#222222] font-bold">
                  <span className="text-[#97A494]"> by</span> Kristin Watson{" "}
                  <span className="text-[#97A494]"> on</span> Dec 19, 2021
                </p>
              </div>
            </article>

            <article className="grid gap-3">
              <img src={post4} alt="post4" className="img2 rounded-2xl" />
              <div className="px-4 grid gap-3">
                <h5 className="text-[#222222] font-bold text-md">
                  How to Choose the Perfect Sofa for Your Space
                </h5>
                <p className="text-[#222222] font-bold">
                  <span className="text-[#97A494]"> by</span> Mia Fernandez
                  <span className="text-[#97A494]"> on</span> Dec 29, 2021
                </p>
              </div>
            </article>

            <article className="grid gap-3">
              <img src={post5} alt="post5" className="img2 rounded-2xl" />
              <div className="px-4 grid gap-3">
                <h5 className="text-[#222222] font-bold text-md">
                  Comfort Meets Style: The Rise of Modular Sofas
                </h5>
                <p className="text-[#222222] font-bold">
                  <span className="text-[#97A494]"> by</span> Daniel Cruz
                  <span className="text-[#97A494]"> on</span> Dec 5, 2021
                </p>
              </div>
            </article>

            <article className="grid gap-3">
              <img src={post6} alt="post6" className="img2 rounded-2xl" />
              <div className="px-4 grid gap-3">
                <h5 className="text-[#222222] font-bold text-md">
                  Why Your Sofa Defines Your Living Room
                </h5>
                <p className="text-[#222222] font-bold">
                  <span className="text-[#97A494]"> by</span> Olivia Tan
                  <span className="text-[#97A494]"> on</span> Dec 22, 2021
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
