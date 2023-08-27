import { BackBody } from "@leoncardona/react-body-anatomy";
import styles from "../page.module.css";
import Menu from "@/app/components/content/menu";
import frontData from "./frontData.json";

export default function Planche() {
  return (
    <main className={styles.main}>
      <div className={styles.svg}>
        <BackBody
          data={{
            tricep_left: "#6bd3ff",
            tricep_right: "#6bd3ff",
            rhomboid_left: "#6bd3ff",
            rhomboid_right: "#6bd3ff",
            dorsal_left: "#6bd3ff",
            dorsal_right: "#6bd3ff",
          }}
          color="#4a4a4a"
        />
      </div>
      <Menu data={frontData} youtubeAPIKey={process.env.YOUTUBE_API} />
    </main>
  );
}
