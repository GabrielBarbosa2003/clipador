import VideoList from '../VideoList';
import styles from "./searchableVideo.module.css"

export default function SearchableVideoList() {
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

                </form>

            </section>

            <VideoList />
        </>

    )
}
