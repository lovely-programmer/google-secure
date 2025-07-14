import Link from "next/link";
import styles from "./page.module.css";

export default function Secured() {
  return (
    <div className={styles.secured}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Done!</h1>
        <p className={styles.p}>Your have successfully secured your account</p>
        <Link href="/">
          <button className={styles.button}>Return to Home</button>
        </Link>
      </div>
    </div>
  );
}
