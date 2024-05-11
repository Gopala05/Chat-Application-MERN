import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthContext();

  const SignUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const isValid = handleValidation({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!isValid) return;

    setLoading(true);
    try {
      const payload = JSON.stringify({
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      });
      const response = await axios.post("/api/auth/signup", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;

      if (data.error) {
        throw new Error(data.error);
      }

      //Update Local Storage
      localStorage.setItem("user-info", JSON.stringify(data));

      //Context setUser
      setUser(data);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, SignUp };
};

export default useSignUp;

function handleValidation({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all tyhe fields to Sign Up");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password and Confirm Password do not match");
    return false;
  }

  if (password.length < 4) {
    toast.error("Password must be at least 4 characters long.");
    return false;
  }

  return true;
}
