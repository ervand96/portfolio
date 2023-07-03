import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "../hamburger-menu";
import { navbar, NavbarProps } from "../../../constatnts/navbar";

import styles from "./headerSection.module.scss";

export default function Header() {
  const [activeHamburger, setActiveHamburger] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const openHamburger = (): void => {
    setActiveHamburger(!activeHamburger);
  };

  useEffect(() => {
    const clickedOutside = (e: MouseEvent): void => {
      if (
        !activeHamburger &&
        ref.current &&
        !ref.current.contains(e.target as HTMLElement)
      ) {
        setActiveHamburger(!activeHamburger);
      }
    };

    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [activeHamburger]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.hamburgerMenuBox} onClick={openHamburger}>
        <HamburgerMenu active={activeHamburger} />
      </div>
      <div className={styles.navbar}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
          </div>
          <div className={styles.logoText}>
            <span></span>
          </div>
        </div>
        <div className={styles.navbarSection}>
          <ul
            className={`${!activeHamburger && styles.openHeaderNavbar} ${
              styles.navbarSection
            }`}
          >
            <div className={styles.menu}>
              {navbar?.map((item: NavbarProps, index: number) => (
                <li key={index}>{item.title}</li>
              ))}
            </div>
          </ul> 
        </div>
      </div>
    </div>
  );
}
