import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogIn = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthContext();

  const LogIn = async (username, password) => {
    const status = handleValidation(username, password);
    if (!status) return;
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/auth/login",
        JSON.stringify({ username, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      if (data.error) {
        throw new Error(data.error);
      }

      //Local Storage Update
      localStorage.setItem("user-info", JSON.stringify(data));

      //Context Update
      setUser(data);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, LogIn };
};

export default useLogIn;

function handleValidation(username, password) {
  if (!username && !password) {
    toast.error("Please provide Username and Password");
    return false;
  }
  if (!username) {
    toast.error("Please provide Username");
    return false;
  }
  if (!password) {
    toast.error("Please provide Password");
    return false;
  }

  return true;
}
