export default function Login() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Sign up
        </h2>

        <form className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#314D43]"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#314D43]"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#314D43]" />
              Remember me
            </label>

            <a href="#" className="text-gray-600 hover:text-gray-800">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-[#314D43] hover:bg-[#253931] text-white font-semibold py-2 rounded-lg transition"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-[#314D43] font-semibold hover:underline">
            Create an account
          </a>
        </p>

        <div className="flex items-center justify-center mt-6">
          <span className="text-gray-500 text-sm">Or login with</span>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 px-3 text-sm font-semibold">
            Continue with Facebook
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-2 px-3 text-sm font-semibold">
            Continue with Twitter
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 px-3 text-sm font-semibold">
            Continue with Google
          </button>
        </div>
      </div>
    </section>
  );
}
