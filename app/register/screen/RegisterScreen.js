"use client";
import styles from "../styles/registerStyles.module.css";
import FormRegister from "../components/FormRegister";

const RegisterScreen = () => {
  return (
    <div className={styles.background_wrapper}>
      <FormRegister />
    </div>
  );
};

export default RegisterScreen;
