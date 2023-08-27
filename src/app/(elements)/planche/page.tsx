import { FrontBody } from "@leoncardona/react-body-anatomy";
import styles from "../page.module.css";
import Menu from "@/app/components/content/menu";
import plancheData from "./plancheData.json";

export default function Planche() {
  return (
    <main className={styles.main}>
      <div className={styles.svg}>
        <FrontBody
          data={{
            bicep_right: "#ff6363",
            bicep_left: "#ff6363",
            anterior_deltoid_left: "#ff6363",
            anterior_deltoid_right: "#ff6363",
            serratus_left: "#ff6363",
            serratus_right: "#ff6363",
          }}
          color="#4a4a4a"
        />
      </div>
      <Menu data={plancheData} youtubeAPIKey={process.env.YOUTUBE_API} />
    </main>
  );
}
