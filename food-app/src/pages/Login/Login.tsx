import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Headling from "../../components/Headlink/Headling";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { FormEvent } from "react";

const Login = () => {
  const submit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className={styles.login}>
      <Headling>Вход</Headling>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.field}>
          <label htmlFor="email">Ваш Email</label>
          <Input id="email" name="email" placeholder="Email" />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
          />
        </div>
        <Button appearance="big">Вход</Button>
      </form>

      <div className={styles.links}>
        <div>Нет аккаунта?</div>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default Login;
