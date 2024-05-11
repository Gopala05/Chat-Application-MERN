import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import dotenv from 'dotenv'

// dotenv.config()

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [usersOnline, setUsersOnline] = useState([]);
  const { user } = useAuthContext();

  // console.log(import.meta.env.SOCKET_URL)
  // console.log("Hey")

  useEffect(() => {
    if (user) {
      // Create a WebSocket connection.
      const socket = io("http://localhost:5000", {
        query: { userId: user?._id },
      });
      setSocket(socket);

      socket.on("getUsersOnline", (users) => {
        setUsersOnline(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [user]);
  return (
    <SocketContext.Provider value={{ socket, usersOnline }}>
      {children}
    </SocketContext.Provider>
  );
};
