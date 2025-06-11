import { useState } from "react";
import login from "../api/login";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router";

function LoginPage() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
 
  function handleLogin(e) {
    e.preventDefault();

    // Call the login function from the API
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((data) => {
        // Redirect to the home page or another page
        navigate("/products");
      })
      .catch((error) => {
        setErrors([...errors, error.message]);
      });
    console.log("Login button clicked",e);
    console.log('email: ' , e.target.email.value);
    console.log('password: ' , e.target.password.value);
  }


  return (
    <div className="container">
      <div className={styles.loginPage}>
        <div className={styles.loginForm}>
          <h2>Sign In</h2>
          <form onSubmit={(e)=>{handleLogin(e)}} >
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email"/>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password"/>
            </div>
            <div className={styles.forgot}>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Sign In</button>
            <div className={styles.divider}>or</div>
            <div className={styles.toggleButton}>
              <a
                href="/register"
                className={styles.toggleLink}
              >
                Don't have an account? <b>Sign Up</b>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
