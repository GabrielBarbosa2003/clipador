import VideoList from '../VideoList';;
import styles from "./searchableVideo.module.css";
import { pegaClips, pegaStreamer } from '../../services/services.js';
import { useEffect, useState } from 'react';

export default function SearchableVideoList() {

    const [name, setName] = useState('');
    const [Data, setData] = useState('');
    const [Horario, setHorario] = useState('');
    const [clips, setClips] = useState([]);



    const handleSubmit = async (event) => {
        event.preventDefault();
        // Verifica se há campos vazios
        if (name === '' || Data === '' || Horario === '') {
            return alert('Faltam informações obrigatórias');
        }

        // Converte a data e hora em formato ISO
        const dateFormat = new Date(Data + ' ' + Horario).toISOString();

        // Obtém o id do streamer
        const streamerId = await pegaStreamer('qaem3unzplxs9kvp19hdilobzbt0lq', 'j45vs677jv0v2x2zltjd7c7bmpmri6', name);
        
        console.log('streamerId:', streamerId);
        
        if (!streamerId) {
            return alert('Streamer não encontrado');
        }
        
        // Obtém os clips do streamer
        const responseClips = await pegaClips('qaem3unzplxs9kvp19hdilobzbt0lq', 'j45vs677jv0v2x2zltjd7c7bmpmri6', streamerId, dateFormat);
        console.log('responseClips:', responseClips);
        if (responseClips.length == 0) {
            return alert('Não há clips disponíveis para esta data.');
        }
        setClips(responseClips);
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setData('');
        setHorario('');
       
      };
    


    return (
        <>
            <section className={styles.main}>
                <form className={styles.forms} onSubmit={handleSubmit}>
                    <label className={styles.inputs}>
                        Nome do streamer:
                        <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
                        Data do clip:
                        <input type="date" name="date" value={Data} onChange={(event) => setData(event.target.value)} />
                        Horario do clip:
                        <input type="time" name="time" value={Horario} onChange={(event) => setHorario(event.target.value)} />
                    </label>

                    <div className={styles.buttons}>
                        <input type="submit" value="Enviar" />
                        <input type="reset" value="Reset"  onClick={() => resetForm()} />
                    </div>

                </form>

            </section>

            <VideoList videos={clips} />


        </>

    )
}
