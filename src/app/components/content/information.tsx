"use client";
import styles from "./information.module.css";

export default function Information({ data }: any) {
  return (
    <ul className={styles.elementList}>
      {data.map((element: any) => {
        return (
          <li key={element.url}>
            <a href={element.url} target="_blank" className={styles.element}>
              {element.title} - {element.author}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
