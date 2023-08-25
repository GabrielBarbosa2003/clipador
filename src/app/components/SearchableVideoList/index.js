import VideoList from '../VideoList';
import styles from "./searchableVideo.module.css"

export default function SearchableVideoList() {
    return (
        <>
            <section className={styles.menu}>
                <form>
                    <label>
                        Nome do streamer:
                        <input type="text" name="name" value='text'/>
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
