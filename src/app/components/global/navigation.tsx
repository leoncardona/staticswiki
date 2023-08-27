import ActiveRoute from "./activeRoute";
import Logo from "./logo";
import styles from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  const routes = [
    { name: "Home", route: "/" },
    { name: "Elements", route: "/" },
    { name: "About", route: "/about" },
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.flex}>
        <Link href={"/"}>
          <Logo fontSize={styles.logoSize} />
        </Link>
        <h2>&gt;</h2>
        <ActiveRoute />
      </div>
      <ul className={styles.list}>
        {routes.map((element) => {
          return (
            <li key={element.name}>
              <Link href={element.route}>{element.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
