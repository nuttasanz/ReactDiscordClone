"use client";
import styles from "../styles/loginStyles.module.css";
import FormLogin from "../components/FormLogin";

const LoginScreen = () => {
  return (
    <div className={styles.background_wrapper}>
      <FormLogin />
    </div>
  );
};

export default LoginScreen;
