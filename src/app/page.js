'use client'
import styles from './page.module.css';
import AppRoutes from './routes';
export default function Home() {
  return (
    <main className={styles.main}>
      <AppRoutes/>
    </main>
  )
}
