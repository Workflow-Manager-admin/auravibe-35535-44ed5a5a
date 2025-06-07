import React, { createContext, useContext, useState } from "react";

// PUBLIC_INTERFACE
export const AuthContext = createContext(null);

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  // Placeholder (no backend yet)
  const [user, setUser] = useState({ username: "auranaut" });

  const login = () => setUser({ username: "auranaut" });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useAuth() {
  return useContext(AuthContext);
}
