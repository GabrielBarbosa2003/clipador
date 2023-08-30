import axios from "axios";

async function geraToken(client_id, client_secret) {
        let url ='https://id.twitch.tv/oauth2/token'        
        console.log(url);
        await axios.get(url, {
            headers: {
                client_id: client_id,
                client_secret: client_secret,
                grant_type: 'client_credentials'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })

}


async function pegaStreamer(client_id, token, streamer,setidBrodcaster) {
        let url = `https://api.twitch.tv/helix/users?login=${streamer}`;
        console.log(url);
        await axios.get(url, {
            headers: {
                'Client-Id': client_id,
                'Authorization': `Bearer ${token}`
            }
        })
            .then(function (response) {
                console.log('sevices',response.data.data[0].id);
                setidBrodcaster(response.data.data[0].id);
             
            })
            .catch((error) => {
                setidBrodcaster(0);
                console.error(error);
            })
            
}

async function pegaClips(client_id, token, broadcaster_id, data,setClips) {
        console.log(data);
        if(!data){
            data = d
        }
        //formarto da data deve ser 2023-08-23T15:00:00Z
        let url = `https://api.twitch.tv/helix/clips?broadcaster_id=${broadcaster_id}&started_at=${data}`;
        console.log(url);
        await axios.get(url, {
            headers: {
                'Client-Id': client_id,
                'Authorization': `Bearer ${token}`
            }
        })
            .then(function (response) {
                console.log(response.data.data);
                setClips(response.data.data);
               
            })
            .catch((error) => {
                console.error(error);
            })
}

async function pegaGameTop(client_id, token) {
    console.log('test');
    let url = `https://api.twitch.tv/helix/games/top`;
    await axios.get(url, {
        headers: {
            'Client-Id': client_id,
            'Authorization': `Bearer ${token}`
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch((error) => {
            console.error(error);
        })


}



module.exports = {
    geraToken,
    pegaStreamer,
    pegaClips,
    pegaGameTop
}