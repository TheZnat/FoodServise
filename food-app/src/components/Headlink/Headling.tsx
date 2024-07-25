import cn from "classnames";
import styles from "./Headling.module.css";
import { HeadlingProps } from "./Headling.props";


const Headling = ({className, children, ...props}: HeadlingProps ) => {
    return (
        <h1 className={cn(className, styles.title)} {...props}>
            {children}
        </h1>
    );
};

export default Headling;