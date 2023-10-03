'use client'

import styles from "./dashboardcards.module.css";

export default function DashboardTabs() {

  return (
    <div className={styles.main}>
      <div className={styles.tabContainer}>
        <div className={styles.tab1}>
          <div className={styles.tab}>
            <div className={styles.tabContent}>

            </div>
          </div>
        </div>
        <div className={styles.tabs2and3}>
          <div className={styles.tab}>
            <h2>Texto</h2>
            <div className={styles.tabContent}>

            </div>
          </div>
          <div className={styles.tab}>
            <h2>Texto</h2>
            <div className={styles.tabContent}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};







