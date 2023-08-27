import styles from "./logo.module.css";
import { bladeRunnerFont } from "../../utils/fonts";

export default function Logo(props: { fontSize: string }) {
  return (
    <h1
      className={`${bladeRunnerFont.className} ${styles.logo} ${props.fontSize}`}
    >
      statics.wiki
    </h1>
  );
}
