import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogIn from "../../hooks/useLogIn";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, LogIn } = useLogIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await LogIn(username, password);
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border">
        <CardItem
          translateZ="50"
          className="text-xl w-full font-bold text-neutral-600 dark:text-white"
        >
          <h1 className="text-3xl grow font-semibold text-center text-white">
            Login
            <span className="text-red-500"> Chat Application</span>
          </h1>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-white">
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
                <span className="text-base label-text text-white">
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
              className="p-2 text-xl label-text text-white hover:underline hover:text-accent hover:italic mt-2 inline-block"
            >
              Don't have an accoount ?
            </Link>

            <div
              className="flex justify-center bg-accent text-black font-bold p-2 rounded-lg cursor-pointer"
              onClick={handleSubmit}
            >
              <button type="submit" disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Login;
