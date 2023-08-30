import React from 'react'

import Video from '../Video'
import styles from "./videolist.module.css";

export default function VideoList(clips) {
   
    const count = clips.videos.length
    if(count > 0){
        const noun = count > 1 ? 'Videos' : 'Video'
        var title = count + ' ' + noun;
    }
    return (
        <section className={styles.main}>
            
            <h1>{title}</h1>
            <div className={styles.video}>
            {clips.videos.map((video) => (
                <Video key={video.id} video={video}/>
            ))}
            </div>

        </section>
    )
}
