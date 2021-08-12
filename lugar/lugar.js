const axios = require("axios");
const { builtinModules } = require("module");

const getLugar = async (direccion) => {
  const encodeUrl = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `https://weatherapi-com.p.rapidapi.com/timezone.json?q=${encodeUrl}`,
    headers: {
      "x-rapidapi-key": "e2c1055e4bmsh88163acca1f8313p1c6dbejsn0ace5c46161a",
    },
  });

  const resp = await instance.get();

  if (resp.data.length === 0) {
    throw new Error(`No hay resultado para ${direccion}`);
  }

  const data = resp.data.location;
  const name = data.name;
  const lat = data.lat;
  const lon = data.lon;

  return {
    name,
    lat,
    lon,
  };
};

module.exports = {
  getLugar,
};
