import axios from "axios";

async function geraToken(client_id, client_secret) {
    try {
        let url = 'https://id.twitch.tv/oauth2/token'
        console.log(url);
        const response = await axios.get(url, {
            headers: {
                client_id: client_id,
                client_secret: client_secret,
                grant_type: 'client_credentials'
            }
        })
        return response;
    } catch (error) {

        console.log(error);
        return null; // Retorne null em caso de erro
    }
}


async function pegaStreamer(client_id, token, streamer) {
    try {
        let url = `https://api.twitch.tv/helix/users?login=${streamer}`;
        console.log(url);
        const response = await axios.get(url, {
            headers: {
                'Client-Id': client_id,
                'Authorization': `Bearer ${token}`
            }
        })

        console.log(response.data.data[0].id);
        return response.data.data[0].id;
    } catch (error) {
        console.log(error);
        return null; // Retorne null em caso de erro
    }

}

async function pegaClips(client_id, token, broadcaster_id, data) {
    try {
        //formarto da data deve ser 2023-08-23T15:00:00Z
        let url = `https://api.twitch.tv/helix/clips?broadcaster_id=${broadcaster_id}&started_at=${data}`;
        console.log(url);
        const response = await axios.get(url, {
            headers: {
                'Client-Id': client_id,
                'Authorization': `Bearer ${token}`
            }
        })

        console.log(response.data.data);
        return response.data.data;
    } catch (error) {

        console.log(error);
        return null; // Retorne null em caso de erro
    }

}

async function pegaGameTop(client_id, token) {
    try {
        let url = `https://api.twitch.tv/helix/games/top`;
        const response = await axios.get(url, {
            headers: {
                'Client-Id': client_id,
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data;

    } catch (error) {

        console.log(error);
        return null; // Retorne null em caso de erro
    }


}



module.exports = {
    geraToken,
    pegaStreamer,
    pegaClips,
    pegaGameTop
}