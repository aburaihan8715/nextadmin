import LoginForm from "@/components/login/loginForm/loginForm";
import styles from "./login.module.css";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
