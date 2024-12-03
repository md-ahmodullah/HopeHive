import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const authInfo = {
    name: "Ahmod",
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
