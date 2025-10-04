import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-xl px-6">
        <h1 className="text-7xl font-extrabold tracking-tight mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">
          Oops! This room doesn’t exist.
        </h2>
        <p className="text-lg text-gray-200 mb-10">
          The page you’re looking for might have been moved, renamed, or is
          taking a break like a comfy sofa.
        </p>

        <Link
          to="/"
          className="inline-block bg-[#3b5d50] hover:bg-[#2e4a40] text-white text-lg font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          🛋️ Back to Home
        </Link>
      </div>

      <footer className="absolute bottom-5 text-gray-400 text-sm">
        © {new Date().getFullYear()} Furni. All rights reserved.
      </footer>
    </section>
  );
}
