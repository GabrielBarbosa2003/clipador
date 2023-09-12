
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={styles.global}>{children}</body>
    </html>
  )
}
