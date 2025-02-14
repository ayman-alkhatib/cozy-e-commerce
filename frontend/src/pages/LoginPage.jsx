import styles from "./LoginPage.module.css";
function LoginPage() {
  return (
    <div className="container">
      <div className={styles.loginPage}>
        <div className={styles.loginForm}>
          <h2>Login</h2>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
