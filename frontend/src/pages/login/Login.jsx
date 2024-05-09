import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogIn from "../../hooks/useLogIn";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, LogIn } = useLogIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await LogIn(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding border-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-red-500"> Chat Application</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-extrabold">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-extrabold">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full input input-bordered h-10"
            />
          </div>

          <Link
            to="/signup"
            className="p-2 text-xl label-text text-black hover:underline hover:text-white hover:italic mt-2 inline-block"
          >
            Don't have an accoount ?
          </Link>

          <div>
            <button
              className="btn btn-block btn-accent btn-md mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
