import { useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrors([]);
    try {
      await login(email, password);
      navigate("/products")
    } catch (error) {
      console.log(error.message)
      setErrors([error.message]);
    }
    console.log("Login button clicked", e);
    console.log("email: ", e.target.email.value);
    console.log("password: ", e.target.password.value);
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
