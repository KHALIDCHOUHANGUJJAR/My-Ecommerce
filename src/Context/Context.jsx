/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, data }}>
      {children}
    </UserContext.Provider>
  );
};
