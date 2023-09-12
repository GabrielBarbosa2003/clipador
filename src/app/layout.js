
import styles from './layout.module.css';
export default function RootLayout({ children }) {
 return (
    <html lang="en" className={styles.html} >
      <body className={styles.global}>{children}</body>
    </html>
  )
}
