
const ENDPOINT = 'https://api.iextrading.com/1.0/'

function getCompanyFinances(symbol) {
  return fetch(`${ENDPOINT}stock/${symbol}/financials`)
    .then(response => response.json())
}

export default {
  getCompanyFinances
}