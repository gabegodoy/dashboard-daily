import axios from 'axios';

export default function getTemperature() {
  const apiKey = '981353ea0ce707b0429d848ca2e73704';
  const city = 'bauru-sp';
  const district = 'vila-aviacao';
  const url = `http://apiadvisor.climatempo.com.br/api/v1/weather/locale/${city}/districts/${district}/current?token=${apiKey}`;

  return axios.get(url)
    .then(response => response.data.data.temperature);
}

getTemperature()
  .then(temperature => console.log(`A temperatura atual é ${temperature}°C.`))
  .catch(error => console.log(`Ocorreu um erro: ${error}`));


  