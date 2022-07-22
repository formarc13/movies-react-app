import { createContext, useState, useCallback, useMemo, useContext } from "react";
import PropTypes from 'prop-types';
import { usersServices } from "../services/api/usersServices";
const MOVIES_USER = "MOVIES_USER";

export const AuthContext = createContext(); //Devuelve un objeto con la propiedad provider.

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(MOVIES_USER) ?? false
  );

  const login = useCallback((values) => {
    const fetchLogin = async () => {
      let response = await usersServices.autenticarUsuario(values);

      return response;
    }

    fetchLogin()
    .then(resultado => {
      if(resultado.status !== 200 && typeof resultado.status !== "undefined" ){
          alert(resultado.errors.custom.msg)
      }else{
          let user = {
              email: values.email,
              token: resultado.data.token 
          }
          localStorage.setItem(MOVIES_USER, JSON.stringify(user))
          setIsAuthenticated(true);
      }
    })
    .catch(error => console.log(error)) 
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

export const useAuthContext = () => {
  return useContext(AuthContext)
}