const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=12e7e39106cd0db23016b80b26e8c420`)

    //console.log(resp.data);
    return resp.data.main.temp
}

module.exports = {
    getClima
}