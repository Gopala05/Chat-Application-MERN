import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogOut from "../../hooks/useLogOut";

const LogOut = () => {
  const { loading, Logout } = useLogOut();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={Logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogOut;
