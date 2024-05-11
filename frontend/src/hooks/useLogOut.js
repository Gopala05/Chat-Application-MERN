import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogOut = () => {
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuthContext();

  const Logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/auth/logout", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("user-info");
      setUser(null);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, Logout };
};

export default useLogOut;
