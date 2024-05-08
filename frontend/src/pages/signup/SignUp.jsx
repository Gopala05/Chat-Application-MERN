import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, SignUp } = useSignUp();

  const handleCheckBoxGender = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await SignUp(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding border-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-red-500"> Chat Application</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-extrabold">
                Full Name
              </span>
            </label>
            <input
              type="text"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10 text-white"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-extrabold">
                Username
              </span>
            </label>
            <input
              type="text"
              value={inputs.username}
              onChange={(e) => {
                setInputs({ ...inputs, username: e.target.value });
              }}
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 text-white"
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 text-white"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-extrabold">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 text-white"
            />
          </div>

          <GenderCheckBox
            onCheckBoxChange={handleCheckBoxGender}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="p-2 text-xl label-text text-black hover:underline hover:text-white hover:italic mt-2 inline-block"
          >
            Already have an accoount ?
          </Link>

          <div>
            <button
              className="btn btn-block btn-accent btn-md mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
