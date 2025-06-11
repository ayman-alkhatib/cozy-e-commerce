import { useState } from "react";
import styles from "./RegisterPage.module.css";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

function RegisterPage() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { register } = useAuth();

  async function handleRegister(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrors([]);
    try {
      await register(email, password);
      navigate("/products");
    } catch (error) {
      setErrors([error.message]);
    }
  }

  return (
    <div className="container">
      <div className={styles.registerPage}>
        <div className={styles.registerForm}>
          <h2>Sign Up</h2>
          <form
            onSubmit={(e) => {
              handleRegister(e);
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
            <div className={styles.formGroup}>
              <label htmlFor="confirm">Confirm Password</label>
              <input type="password" id="confirm" />
            </div>
            <button type="submit">Sign Up</button>
            <div className={styles.divider}>or</div>
            <div className={styles.toggleButton}>
              <span className={styles.toggleLink}>
                Already have an account?{" "}
              </span>
              <button
                className={styles.toggleButton}
                onClick={() => {
                  navigate("/login");
                }}
                type="button"
              >
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
