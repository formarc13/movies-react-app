import { createContext, useState, useCallback, useMemo } from "react";
import PropTypes from 'prop-types';
const MOVIES_USER = "MOVIES_USER";

export const AuthContext = createContext(); //Devuelve un objeto con la propiedad provider.

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(MOVIES_USER) ?? false
  );

  const login = useCallback(() => {
    window.localStorage.setItem(MOVIES_USER, true);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(MOVIES_USER);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => (
      {
        login,
        logout,
        isAuthenticated,
      }),
      [login, logout, isAuthenticated]
    );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.object,
}