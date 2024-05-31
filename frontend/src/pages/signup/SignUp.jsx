import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

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
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border">
        <CardItem
          translateZ="60"
          className="text-xl w-full font-bold text-neutral-600 dark:text-white"
        >
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Sign Up
            <span className="text-red-500"> Chat Application</span>
          </h1>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-white">
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
                <span className="text-base label-text text-white">
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
                <span className="text-base label-text text-white">
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
                <span className="text-base label-text text-white">
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
              className="p-2 text-xl label-text text-white hover:underline hover:text-accent hover:italic mt-2 inline-block"
            >
              Already have an accoount ?
            </Link>

            <div
              className="flex justify-center bg-accent text-black font-bold p-2 rounded-lg cursor-pointer"
              onClick={handleSubmit}
            >
              <button type="submit" disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default SignUp;
