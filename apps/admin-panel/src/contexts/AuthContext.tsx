/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface AuthContextProps {
  user: Record<string, any> | null;
  setUser: Dispatch<SetStateAction<Record<string, any> | null>> | null;
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>> | null;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: null,
  token: null,
  setToken: null,
});

let loggedUser: Record<string, any> | null = null;
let loggedToken: string | null = null;

if (localStorage.getItem("loggedUser")) {
  loggedUser = JSON.parse(localStorage.getItem("loggedUser") as string);
}

if (localStorage.getItem("loggedToken")) {
  loggedToken = JSON.parse(localStorage.getItem("loggedToken") as string);
}

export const AuthProvider = function ({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(loggedUser);
  const [token, setToken] = useState(loggedToken);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = function () {
  return useContext(AuthContext);
};
