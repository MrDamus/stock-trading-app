export const selectCompany = (payload) => ({
  type: 'SELECT_COMPANY',
  payload
})

export const selectValue = (payload) => ({
  type: 'SELECT_VALUE',
  payload
})

export const inputValue = (payload) => ({
  type: 'INPUT_VALUE',
  payload
})

const SERVER_URL = 'http://localhost:8081/'

export function clearDatabase(e) {
  return function () {
    fetch(`${SERVER_URL}users/`, {
      method: 'DELETE',
      body: e,
    })
    console.log('All records from database has been cleared.')
  }
}