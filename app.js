const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const { coral } = require("color-name");

const argv = require("yargs").options({
  city: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true,
  },
}).argv;

const getInfo = async (direccion) => {
  try {
    const coords = await lugar.getLugar(direccion);
    const temp = await clima.getClima(coords.lat, coords.lon);
    return `El clima de ${direccion} es de ${temp}.`;
  } catch (error) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.city).then(console.log).catch(console.log);

//ejecutar en cosola: node app -d "New York"
