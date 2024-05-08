import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding border-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-red-500"> Chat Application</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-extrabold"> Username </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-extrabold"> Password </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <a
            href="#"
            className="p-2 text-xl label-text text-black hover:underline hover:text-white hover:italic mt-2 inline-block"
          >
            Don't have an accoount ?
          </a>

          <div>
            <button className="btn btn-block btn-accent btn-md mt-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
