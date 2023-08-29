import VideoList from '../VideoList';
import styles from "./searchableVideo.module.css"
import {pegaStreamer, pegaClips} from '../../services/services.js'

export default function SearchableVideoList() {
    function olaFunc(valor){
        console.log(valor)
    }
    //pegaStreamer("qaem3unzplxs9kvp19hdilobzbt0lq","n6lujs7y10t3hn1lsw0pjef89y97sy", "gaules")
    return (
        <>
            <section>
                <form>
                    <label className={styles.menu}>
                        Nome do streamer:
                        <input type="text" name="name"/>
                        Data do clip:
                        <input type="date" name="name" />
                        Horario do clip:
                        <input type="time" name="name" />
                    </label>
                    <input type="submit" value="Enviar" />
                    <button onClick={pegaStreamer("qaem3unzplxs9kvp19hdilobzbt0lq","n6lujs7y10t3hn1lsw0pjef89y97sy", "gaules")}>Enviarrr</button>
                </form>

            </section>

            <VideoList />
        </>

    )
}
