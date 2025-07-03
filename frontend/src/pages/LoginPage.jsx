import { useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{14,25}$/;

function LoginPage() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();
    // Clear previous errors
    setErrors([]);

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!email) {
      setErrors((prevErrors) => [...prevErrors, "Email is required."]);
      return;
    } else if (!emailRegex.test(email)) {
      setErrors((prevErrors) => [...prevErrors, "Please enter a valid email address."]);
      return;
    }

    if (!password) {
      setErrors((prevErrors) => [...prevErrors, "Password is required."]);
      return;
    } else if (!passwordRegex.test(password)) {
      setErrors((prevErrors) => [
        ...prevErrors,
        "Password must be between 14 and 25 characters long, contain at least one uppercase letter, one digit, and one special character.",
      ]);
      return;
    }

   

    try {
      await login(email, password);
      navigate("/products");
    } catch (error) {
      console.log(error.message);
      setErrors([error.message]);
    }
  }

  return (
    <div className="container">
      <div className={styles.loginPage}>
        <div className={styles.loginForm}>
          <h2>Sign In</h2>
          <form
            onSubmit={(e) => {
              handleLogin(e);
            }}
          >
            {errors.length > 0 && (
              <div className={styles.error}>
                {errors.map((err, idx) => (
                  <div key={idx}>{err}</div>
                ))}
              </div>
            )}
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button type="submit">Sign In</button>
            <div className={styles.divider}>or</div>
            <div className={styles.toggleButton}>
              <span className={styles.toggleLink}>Don't have an account?</span>
              <button
                className={styles.toggleButton}
                onClick={() => {
                  navigate("/register");
                }}
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
