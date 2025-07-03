import { useContext } from "react";
import { authService } from "../services/authService";
import { AuthContext } from "../logic/authContext";
function useAuth() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  async function login(email, password) {
    try {
      const data = await authService().login(email, password);
      if (data?.access_token) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      throw error;
    }
  }

  async function logout() {
    await authService().logout();
    setIsAuthenticated(false);
  }

  async function register(email, password) {
    try {
      const data = await authService().register(email, password);
      if (data?.access_token) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      throw error;
    }
  }

  return {
    login,
    logout,
    register,
    isAuthenticated
  };
}

export default useAuth;
