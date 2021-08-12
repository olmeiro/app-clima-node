const axios = require("axios");

const getClima = async (lat, lon) => {
  const instance = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/find?lat=${lat}&lon=${lon}&units=metric`,
    headers: {
      "x-rapidapi-key": "e2c1055e4bmsh88163acca1f8313p1c6dbejsn0ace5c46161a",
    },
  });

  const resp = await instance.get();

  return resp.data.list[0].main.temp;
};

module.exports = {
  getClima,
};
