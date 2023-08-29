import VideoList from '../VideoList';;
import styles from "./searchableVideo.module.css";
import { pegaClips, pegaGameTop } from '../../services/services.js';
import { useEffect, useState } from 'react';

export default function SearchableVideoList() {
    const [clips, setClips] = useState([]);

    useEffect(() => {
        fetchClips()
    }, [])
    async function fetchClips() {
        const response = await pegaClips('qaem3unzplxs9kvp19hdilobzbt0lq', 'n6lujs7y10t3hn1lsw0pjef89y97sy', 181077473, '2023-08-23T15:00:00Z');
        setClips(response);

    }


    return (
        <>
            <section className={styles.main}>
                <form className={styles.forms} >
                    <label className={styles.inputs}>
                        Nome do streamer:
                        <input type="text" name="name" />
                        Data do clip:
                        <input type="date" name="name" />
                        Horario do clip:
                        <input type="time" name="name" />
                    </label>

                    <div className={styles.buttons}>
                        <input type="submit" value="Enviar" />
                        <input type="reset" value="Reset" />
                    </div>

                </form>

            </section>

            <VideoList video={clips} />
        </>

    )
}
