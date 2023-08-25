import Thumbnail from "../Thumbnail";
import json from "../../json/twitch.json";
import styles from "./video.module.css";

export default function Video({ video }) {
    return (
        <div className={styles.fundoCards}>
            <div className={styles.card}>
                <Thumbnail thumb={video.thumbnail_url} />
                <a href={video.url}>
                    <h3>{video.title}</h3>
                    <p>{video.broadcaster_name}</p>
                </a>
            </div>

        </div>
    );
}