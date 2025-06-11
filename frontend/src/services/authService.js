import apiLogin from "../api/apiLogin";
import apiRegister from "../api/apiRegister";

export function authService() {
  async function login(email, password) {
    try {
      const data = await apiLogin(email, password);

      // Store the token in localStorage
      localStorage.setItem("access_token", data.access_token);
      return data;
    } catch (error) {
      if (error.message === "Bad credentials") {
        throw new Error("Invalid email or password.");
      }
      throw error;
    }
  }

  async function logout() {
    localStorage.removeItem("access_token");
  }

  async function register(email, password) {
    try {
      const data = await apiRegister(email, password);

      // Store the token in localStorage
      localStorage.setItem("access_token", data.access_token);
      return data;
    } catch (error) {
      throw error;
    }
  }

  return {
    login,
    logout,
    register,
  };
}
