import styles from '../styles/Menu.module.css';
import Link from 'next/link'

function Menu() {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>Navigate with me</span>
      <div className={styles.linkContainer}>
        <span className={styles.link}><Link href="/">Home </Link></span>
        <span className={styles.link}><Link href="/shop"> Shop</Link></span>
        <span className={styles.link}><Link href="/about">About </Link></span>
      </div>
    </div>
  );
}

export default Menu;
