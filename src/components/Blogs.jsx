import post1 from "../assets/post-1.jpg";
import post2 from "../assets/post-2.jpg";
import post3 from "../assets/post-3.jpg";

export default function Blogs() {
  return (
    <>
      <section aria-labelledby="blogs" className="py-30 pb-50">
        <div className="wrapper grid gap-20">
          <div className="flex items-center justify-between">
            <h2
              id="blogs"
              className="text-[#222222] font-medium text-3xl lg:text-4xl"
            >
              Recent Blogs
            </h2>

            <a
              href="#"
              className="font-bold underline text-[#222222]/70 text-sm"
            >
              View All Posts
            </a>
          </div>
          <div className="grid place-content-center gap-10 [&>div]:py-10 [&>div]:relative [&>div]:cursor-pointer md:flex lg:flex lg:flex-3 ">
            <arcticle className="grid gap-3">
              <img src={post1} alt="post1" className="rounded-2xl" />
              <div className="px-4 grid gap-3">
                <h5 className="text-[#222222] font-bold text-md">
                  First Time Home Owner Ideas
                </h5>
                <p className="text-[#222222] font-bold">
                  <span className="text-[#97A494]"> by</span> Kristin Watson{" "}
                  <span className="text-[#97A494]"> on</span> Dec 19, 2021
                </p>
              </div>
            </arcticle>

            <article className="grid gap-3">
              <img src={post2} alt="post2" className="rounded-2xl" />
              <div className="px-4 grid gap-3">
                <h5 className="text-[#222222] font-bold text-md">
                  How To Keep Your Furniture Clean
                </h5>
                <p className="text-[#222222] font-bold">
                  <span className="text-[#97A494]"> by</span> Robert Fox
                  <span className="text-[#97A494]"> on</span> Dec 15, 2021
                </p>
              </div>
            </article>

            <article className="grid gap-3">
              <img src={post3} alt="post3" className="rounded-2xl" />
              <div className="px-4 grid gap-3">
                <h5 className="text-[#222222] font-bold text-md">
                  Small Space Furniture Apartment Ideas
                </h5>
                <p className="text-[#222222] font-bold">
                  <span className="text-[#97A494]"> by</span> Kristin Watson
                  <span className="text-[#97A494]"> on</span> Dec 12, 2021
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
