import React from 'react'
import videos from "../../json/twitch.json"
import Video from '../Video'

export default function VideoList() {
    const count = videos.length
    if(count >0){
        const noun = count > 1 ? 'Videos' : 'Video'
        var title = count + ' ' + noun;
    }
    return (
        <section>
            <h1>{title}</h1>
            {videos.map((video) => (
                <Video key={video.id} video={video}/>
            ))}

        </section>
    )
}
