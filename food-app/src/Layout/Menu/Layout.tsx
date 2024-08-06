import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import styles from "./layout.module.css";
import Button from "../../components/Button/Button";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { userAction } from "../../store/user.slice";

const layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()

  const logout = () => {
    dispatch(userAction.logout())
    navigate("/auth/login");
  };

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <img src="/avatar.svg" className={styles.avatar} alt="Аватар" />
          <div className={styles.name}>Кузинов Максим</div>
          <div className={styles.email}>VseZnal@gamil.com</div>
        </div>
        <div className={styles.menu}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(styles.link, {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/icon/menu.svg" alt="меню" />
            Меню
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles.link, {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/icon/cart.svg" alt="корзина" />
            Корзина
          </NavLink>
        </div>
        <Button className={styles.exit} onClick={logout}>
          <img src="/icon/exit.png" alt="выход" />
          Выход
        </Button>
        <div></div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default layout;
