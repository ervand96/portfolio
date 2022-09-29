import mainImage from "../../../public/image/header-bg.png";

import styles from "./main.module.scss";

export default function Main(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <div className={styles.imgSection}>
          <img src={mainImage} alt="mainImage" />
        </div>
      </div>
      <div className={styles.mainInfo}>
        <div className={styles.textInfo}>
          <div className={styles.info}>
            <span>HEY,&nbsp; I’M ERVAND &nbsp; HARUTYUNYAN</span>
          </div>
          <div className={styles.textAndButtonSection}>
            <div className={styles.text}>
              <span>
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </span>
            </div>

            <div className={styles.button}>
              <span>PROJECTS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
