"use client";

import { usePathname } from "next/navigation";
import styles from "./activeRoute.module.css"

export default function ActiveRoute() {
  const pathname = usePathname().slice(1);
  return <h2 className={styles.title}>{pathname}</h2>;
}
