import axios from 'axios';


class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            const test = response.data.bio;
            console.log(response);
            console.log(test);
        } catch(error){
            console.warn('Erro na busca da API');
        }
        
        
    }
}

Api.getUserInfo('leoproject');
Api.getUserInfo('leoproject28312746721');