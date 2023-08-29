import axios from "axios";

function geraToken(client_id,client_secret) {
    try {
        const response =  axios.post('https://id.twitch.tv/oauth2/token', {
            client_id: client_id,
            client_secret: client_secret,
            grant_type: 'client_credentials'
        })
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
  
}


async function pegaStreamer(client_id,token,streamer) {
    try {
        const response =  await axios.get(`https://api.twitch.tv/helix/users?login=${streamer}`, {
            headers: {
                'Client-Id': client_id,
                'Authorization': token }
        })
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
  
}

function pegaClips(client_id,token,broadcaster_id,data) {
    console.log('eita');
    //formarto da data deve ser 2023-08-23T15:00:00Z
    try {
        const response =  axios.get(`https://api.twitch.tv/helix/clips?broadcaster_id=${broadcaster_id}&started_at=${data}'`, {
            headers: {
                'Client-Id': client_id,
                'Authorization': token }
        })
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
    
}

https://api.twitch.tv/helix/games/top

module.exports = {
    geraToken,
    pegaStreamer,
    pegaClips
}