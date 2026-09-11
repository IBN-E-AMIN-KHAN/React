import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>Ibne Amin</h3>
      <button className={styles.btn}>Click Me</button>
    </div>
  );
};

export default Header;
