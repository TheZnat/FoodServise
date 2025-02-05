import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";

const ProductCard = (props: ProductCardProps) => {
  return (
    <Link to={`/product/${props.id}`} className={styles.link}>
      <div className={styles.card}>
        <div
          className={styles.head}
          style={{ backgroundImage: `url('${props.image}')` }}
        >
          <div className={styles.price}>
            {props.price}&nbsp;
            <span className={styles.currency}>₽</span>
          </div>
          <button className={styles.addToCart}>
            <img src="/icon/cart.svg" alt="добавить в корзину" />
          </button>
          <div className={styles.rating}>
            {props.rating}&nbsp;
            <img src="/icon/star.svg" alt="Икаонка звезды" />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.title}>{props.name}</div>
          <div className={styles.description}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
