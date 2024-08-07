import { Outlet, NavLink, useNavigate } from "react-router-dom";
import styles from "./layout.module.css";
import Button from "../../components/Button/Button";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getProfile, userAction } from "../../store/user.slice";
import { useEffect } from "react";

const layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const pofile = useSelector((s: RootState) => s.user.profile);

  const logout = () => {
    dispatch(userAction.logout());
    navigate("/auth/login");
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <img src="/avatar.svg" className={styles.avatar} alt="Аватар" />
          <div className={styles.name}>{pofile?.name}</div>
          <div className={styles.email}>{pofile?.email}</div>
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
