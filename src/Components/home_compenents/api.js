import axios from "axios";

const gameAPI = axios.create({
    baseURL: 'https://my-game-app.onrender.com/api'
});

export const getCategory = (categories) => {
    return gameAPI.get('/reviews', review)
    .then(({data})=>{
        return data.review
    })

}
