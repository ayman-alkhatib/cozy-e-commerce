import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  let token = localStorage.getItem("access_token");
  // Check if the token is valid (not expired)
  const tokenExpiresAt = localStorage.getItem("tokenExpiresAt");
  if (token && tokenExpiresAt && Date.now() > tokenExpiresAt) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("tokenExpiresAt");
    token = null;
  }
  
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
