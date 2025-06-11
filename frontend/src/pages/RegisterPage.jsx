import styles from './RegisterPage.module.css'

function RegisterPage() {
  return (
    <div className="container">
      <div className={styles.registerPage}>
        <div className={styles.registerForm}>
          <h2>Sign Up</h2>
          <form>
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
              <a
                href="/login"
                // style={{
                //   background: "none",
                //   border: "none",
                //   color: "var(--main-color)",
                //   cursor: "pointer",
                //   fontWeight: 600,
                //   padding: 0,
                //   textDecoration: "none",
                // }}
                className={styles.toggleLink}
              >
                Already have an account? <b>Sign In</b>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;