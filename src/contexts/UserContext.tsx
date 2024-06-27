import { ReactNode, createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserContextProps = {
  token: string;
  saveToken: (value: string) => void;
  getToken: () => void;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const UserProvider = ({ children }: UserProviderProps) => {
  // LÓGICA
  const [token, setToken] = useState("");

  const saveToken = async (value: string) => {
    try {
      await AsyncStorage.setItem("@token", value);
      setToken(value);
    } catch (e) {
      // saving error
    }
  };

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <UserContext.Provider value={{ token, saveToken, getToken }}>
      {children}
    </UserContext.Provider>
  );
};