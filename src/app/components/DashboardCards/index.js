'use client'

import styles from "./dashboardcards.module.css";

export default function DashboardTabs() {

  return (
    <div className={styles.main}>
        <div classNames={styles.card1}>
          <h1>Card1</h1>
        </div>
        <div classNames={styles.card2}>
          <h1>Card2</h1>
        </div>
        <div classNames={styles.card3}>
          <h1>Card3</h1>
        </div>
    </div>
  );
};







