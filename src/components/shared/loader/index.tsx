import { Dispatch, SetStateAction } from "react";

import styles from "./loader.module.scss";

interface ILoader {
  isLoader: boolean,
  setIsLoader: Dispatch<SetStateAction<boolean>>
}

export default function Loader({isLoader, setIsLoader}: ILoader ): JSX.Element {
  const timeLoading = 2000;

  setTimeout(() => {
    setIsLoader(false);
  }, timeLoading);

  return (
    <>
      {isLoader && (
        <div className={styles.spinner}>
          <div className={styles["blob blob-0"]} />
          <div className={styles["blob blob-1"]} />
          <div className={styles["blob blob-2"]} />
          <div className={styles["blob blob-3"]} />
          <div className={styles["blob blob-4"]} />
          <div className={styles["blob blob-5"]} />
        </div>
      )}
    </>
  );
}
