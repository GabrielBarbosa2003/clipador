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
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })

}


async function pegaStreamer(client_id, token, streamer) {
        let url = `https://api.twitch.tv/helix/users?login=${streamer}`;
        console.log(url);
        await axios.get(url, {
            headers: {
                'Client-Id': client_id,
                'Authorization': `Bearer ${token}`
            }
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
   
}

async function pegaClips(client_id, token, broadcaster_id, data) {
        console.log(data);
        //formarto da data deve ser 2023-08-23T15:00:00Z
        let url = `https://api.twitch.tv/helix/clips?broadcaster_id=${broadcaster_id}`;
        console.log(url);
        await axios.get(url, {
            headers: {
                'Client-Id': client_id,
                'Authorization': `Bearer ${token}`
            }
        })
            .then(function (response) {
                console.log(response.data);
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
            console.log(response.data);
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