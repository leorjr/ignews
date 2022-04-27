/* eslint-disable @next/next/no-img-element */

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <title>home | ig.news</title>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 / month</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}
