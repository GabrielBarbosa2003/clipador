import VideoList from '../VideoList';;
import styles from "./searchableVideo.module.css";
import { pegaClips, pegaStreamer } from '../../services/services.js';
import { useEffect, useState } from 'react';

export default function SearchableVideoList() {
    
    const [name, setName] = useState('');
    const [Data, setData] = useState('');
    const [Horario, setHorario] = useState('');
    const [clips, setClips] = useState([]);
    const [idBrodcaster, setidBrodcaster] = useState('');
  

     const handleSubmit = async (event) =>{
        event.preventDefault();
        if(name == '' || Data == '' || Horario ==''){
           return alert('ta faltando coisa') 
        }
        
        const dateFormat = (new Date(Data+' '+Horario)).toISOString();
        await pegaStreamer('qaem3unzplxs9kvp19hdilobzbt0lq', 'n6lujs7y10t3hn1lsw0pjef89y97sy',name,setidBrodcaster);
        console.log('idBrodcaster',idBrodcaster);
        if(idBrodcaster == -1 ){
            return alert('esse cara n existe') 
        }
         pegaClips('qaem3unzplxs9kvp19hdilobzbt0lq', 'n6lujs7y10t3hn1lsw0pjef89y97sy', idBrodcaster, dateFormat,setClips);
        if(clips.length == 0){
            return alert(' n tem clips nessa data ai') 
        }
        console.log('clips:',clips);
        
       
    }
   
    

    return (
        <>
            <section className={styles.main}>
                <form className={styles.forms}  onSubmit={handleSubmit}>
                    <label className={styles.inputs}>
                        Nome do streamer:
                        <input type="text" name="name"  value={name} onChange={(event) =>setName(event.target.value)}/>
                        Data do clip:
                        <input type="date" name="date" value={Data} onChange={(event) =>setData(event.target.value)} />
                        Horario do clip:
                        <input type="time" name="time"value={Horario} onChange={(event) =>setHorario(event.target.value)} />
                    </label>

                    <div className={styles.buttons}>
                        <input type="submit" value="Enviar"/>
                        <input type="reset" value="Reset" />
                    </div>

                </form>

            </section>
           
            <VideoList videos = {clips} />
           
        
        </>

    )
}
