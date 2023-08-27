import styles from "./page.module.css";
import Logo from "./components/global/logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo fontSize={styles.logoSize} />
      <div className={styles.buttonContainer}>
        <Link
          className={styles.button}
          style={{ backgroundColor: "#FDD5D5" }}
          href="/planche"
        >
          Planche
        </Link>
        <Link
          className={styles.button}
          style={{ backgroundColor: "#B0ECFF" }}
          href="/front"
        >
          Front
        </Link>
      </div>
    </main>
  );
}
