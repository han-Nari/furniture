import sofa from "../assets/sofa.png";
import envelope from "../assets/envelope-outline.svg";

export default function Footer() {
  return (
    <>
      <footer className=" bg-white shadow-2xl relative py-30 lg:py-15">
        <div className="wrapper grid gap-10">
          <img
            src={sofa}
            alt="sofa"
            className="absolute -top-30 lg:right-22 right-0 w-[300px]"
          />

          <form className="grid gap-5">
            <div className="flex items-center gap-2">
              <img src={envelope} alt="envelope" for="envelope" />
              <label
                htmlFor="envelope"
                className="text-[#3B5D50] text-xl font-semibold
              "
              >
                Subscribe to Newsletter
              </label>
            </div>
            <div className="flex flex-col  gap-5 [&>input]:border-1 [&>input]:border-[#DCE5E4] [&>input]:focus:outline-none [&>input]:focus:border [&>input]:focus:border-[#3B5D50] [&>input]:p-2 [&>input]:rounded-xl lg:flex-row">
              <input type="text" placeholder="Enter your name" />
              <input type="text" placeholder="Enter your email" />
              <button className="w-fit bg-[#3B5D50] p-4 px-6 rounded-2xl hover:bg-[#314D43] cursor-pointer">
                <i className="fa-solid fa-paper-plane text-white"></i>
              </button>
            </div>
          </form>

          <section aria-labelledby="furni" className="flex">
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="grid gap-5 flex-1">
                <h2 id="furni" className="text-[#3b5d50] text-3xl ">
                  Furni.
                </h2>
                <p className="text-[#222222]/70 text-md font-md">
                  Making your home feel beautiful, comfortable, and truly yours.
                </p>

                <div className="flex gap-5 text-[#3b5d50] pt-2 lg:flex-row">
                  <div className="grid place-content-center bg-[#DCE5E4] h-10 w-10  rounded-full hover:text-white hover:bg-[#3b5d50] transition duration-300">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="grid place-content-center bg-[#DCE5E4] h-10 w-10  rounded-full hover:text-white hover:bg-[#3b5d50] transition duration-300">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className="grid place-content-center bg-[#DCE5E4] h-10 w-10  rounded-full hover:text-white hover:bg-[#3b5d50] transition duration-300">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="grid place-content-center bg-[#DCE5E4] h-10 w-10  rounded-full hover:text-white hover:bg-[#3b5d50] transition duration-300">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                </div>
              </div>

              <div className="text-[#222222] flex flex-col gap-10 lg:flex-row [&>*]:lg:gap-20 pt-14">
                <div className="flex gap-10 [&>*]:flex-1 flex-wrap text-md">
                  <div className="flex flex-col gap-2 [&>*]:hover:text-[#97A494] [&>*]:cursor-pointer">
                    <p>About us</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                  </div>
                  <div className="flex flex-col gap-2 [&>*]:hover:text-[#97A494] [&>*]:cursor-pointer">
                    <p>Support</p>
                    <p>Knowledgebase</p>
                    <p>Chat</p>
                  </div>

                  <div className="flex flex-col gap-2 [&>*]:hover:text-[#97A494] [&>*]:cursor-pointer">
                    <p>Jobs</p>
                    <p>Our Team</p>
                    <p>Leadership</p>
                    <p>Privacy Policy</p>
                  </div>
                  <div className="flex flex-col gap-2 [&>*]:hover:text-[#97A494] [&>*]:cursor-pointer">
                    <p>Nordic Chair</p>
                    <p>Kruzo Aero</p>
                    <p>Ergonomic Chair</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t-1 border-[#97A494]/60 py-5 text-[#222222]/70">
            <div className="flex flex-col justify-between gap-5 lg:flex-row ">
              <p className="text-md text-center">
                Copyright ©2025. All Rights Reserved.— Designed with love by
                Untree.co Distributed By Themewagon
              </p>
              <div className=" flex justify-center gap-5 text-[#222222] [&>*]:hover:text-[#97a494] [&>*]:cursor-pointer">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
