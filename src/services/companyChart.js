
const ENDPOINT = 'https://api.iextrading.com/1.0/'

function getCompanyChart(symbol, periodOfTime) {
  return fetch(`${ENDPOINT}/stock/${symbol}/chart/${periodOfTime}`)
    .then(response => response.json())
}

export default {
  getCompanyChart
}