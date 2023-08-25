'use client'
import styles from './page.module.css';
import Workspace from './routes/workspace';
import NotFound from './routes/Notfound';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
export default function Home() {
  return (
    <main className={styles.main}>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Workspace />} />
          <Route  path="/workspace" element={<Workspace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </main>
  )
}
