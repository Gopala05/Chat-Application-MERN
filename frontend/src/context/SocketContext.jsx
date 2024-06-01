import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [usersOnline, setUsersOnline] = useState([]);
  const { user } = useAuthContext();

  console.log("Environment Variables:", import.meta.env.VITE_SOCKET_URL);


  useEffect(() => {
    if (user) {
      // Create a WebSocket connection.
      const socket = io("https://chatforever.onrender.com/", {
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
