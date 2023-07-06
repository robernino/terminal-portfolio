import Terminal from "../components/Terminal";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        rnino:$ <span className={styles.help}>type help to start</span>
      </h1>
      <p>
        Visit{" "}
        {/* <a href="#" target="_blank" rel="noreferrer"> */}
        <a href="#" rel="noreferrer">
          Normal Website
        </a>
      </p>
      <br />
      <Terminal />
    </div>
  );
}
