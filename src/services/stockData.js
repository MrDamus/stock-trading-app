
const ENDPOINT = 'https://api.iextrading.com/1.0/'
const ENDPOINT_companies = `${ENDPOINT}/ref-data/symbols`

function fetchAllCompanies() {
  return fetch(ENDPOINT_companies)
      .then(response => response.json())
 }

export default {
  fetchAllCompanies
}