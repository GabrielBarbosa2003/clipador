import styles from './page.module.css'
import Video from './components/Video'
import VideoList from './components/VideoList'
import SearchableVideoList from './components/SearchableVideoList'

export default function Home() {
  return (
    <main className={styles.main}>
      <VideoList/>

    </main>
  )
}
