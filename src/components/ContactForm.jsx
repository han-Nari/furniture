export default function ContactForm() {
  return (
    <>
      <section aria-labelledby="contact" className="py-30">
        <div className="wrapper">
          <h2
            id="contact"
            className="hidden text-[#222222] font-medium text-3xl lg:text-4xl"
          >
            Contact Us
          </h2>

          <form className="grid place-content-center gap-20">
            <div className="flex flex-col gap-5 [&>div]:flex [&>div]:items-center [&>div]:gap-5 lg:flex-row">
              <div>
                <button className="w-fit bg-[#3B5D50] p-3 px-4 rounded-xl hover:bg-[#314D43] cursor-pointer">
                  <i className="fa-solid fa-location-dot text-white"></i>
                </button>
                <p className="text-[#222222]/70">Valenzuela City, 1446</p>
              </div>

              <div>
                <button className="w-fit bg-[#3B5D50] p-3 px-4 rounded-xl hover:bg-[#314D43] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-tent-tree-icon lucide-tent-tree"
                  >
                    <circle cx="4" cy="4" r="2" />
                    <path d="m14 5 3-3 3 3" />
                    <path d="m14 10 3-3 3 3" />
                    <path d="M17 14V2" />
                    <path d="M17 14H7l-5 8h20Z" />
                    <path d="M8 14v8" />
                    <path d="m9 14 5 8" />
                  </svg>
                </button>
                <a
                  href="https://han-nari.github.io/updated-portfolio/"
                  className="text-[#222222]/70"
                  target="_blank"
                >
                  This is my Domain
                </a>
              </div>

              <div>
                <button className="w-fit bg-[#3B5D50] p-3 px-4 rounded-xl hover:bg-[#314D43] cursor-pointer">
                  <i className="fa-solid fa-phone text-white"></i>
                </button>
                <p className="text-[#222222]/70">+63-927-827-9557</p>
              </div>
            </div>

            <div
              className="flex flex-col gap-5
                [&>div>input,&>div>textarea]:p-3
                [&>div>input,&>div>textarea]:border
                [&>div>input,&>div>textarea]:border-[#DCE5E4]
                [&>div>input,&>div>textarea]:focus:outline-none
                [&>div>input,&>div>textarea]:focus:border-[#3b5d50]
                [&>div>input,&>div>textarea]:bg-white
                [&>div>input,&>div>textarea]:w-full
                [&>div>input,&>div>textarea]:rounded-xl"
            >
              <div className="flex gap-5">
                <input type="text" id="name" placeholder="Enter First Name" />
                <input type="text" id="lname" placeholder="Enter Last Name" />
              </div>

              <div>
                <input type="email" id="email" placeholder="Enter Email" />
              </div>

              <div>
                <textarea
                  name="Message"
                  id=""
                  rows={10}
                  placeholder="Enter Message"
                ></textarea>
              </div>

              <button className="cursor-pointer text-white rounded-3xl w-fit bg-[#2F2F2F] px-7 py-2.5 font-bold hover:bg-[#222222]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
