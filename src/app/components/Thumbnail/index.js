import json from '../../json/twitch.json'
import styles from './thumbnail.module.css'

export default function Thumbnail({thumb}) {
  return (
    
    <div className={styles.quadrado}>
      <img src={thumb} alt='Thumbnail clip'></img>
    </div>
  )
}
