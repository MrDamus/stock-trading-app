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

const serverUrl = 'http://localhost:8080/users/'

export function clearDatabase(e) {
  fetch(serverUrl, {
    method: 'DELETE',
    body: e,
  })
  console.log('All records from database has been cleared.')
}