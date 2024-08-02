import { Outlet } from "react-router-dom";
import style from "./AuthLayout.module.css";

const AuthLayout = () => {
    return (
        <div className={style.layout}>
            <div className={style.logo}>
                <img src='/auth.svg' alt='logo' />

            </div>
            <div className={style.content}>
                <Outlet />

            </div>
            
        </div>
    );
};

export default AuthLayout;