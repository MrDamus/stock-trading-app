
const ENDPOINT = 'https://api.iextrading.com/1.0/'

function getCompanyDetails(symbol) {
  return fetch(`${ENDPOINT}/stock/${symbol}/batch?types=quote,chart`)
    .then(response => response.json())
}

export default {
  getCompanyDetails
}