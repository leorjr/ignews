/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src="/images/logo.svg" alt="logo ig.news" />
          <nav>
            <a className={styles.active} href="#">
              home
            </a>
            <a href="#">posts</a>
          </nav>
        </div>
      </header>
    </>
  );
};
