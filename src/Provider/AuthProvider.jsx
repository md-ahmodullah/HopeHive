import { createContext } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider() {
  const authInfo = {
    name: "Ahmod",
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
