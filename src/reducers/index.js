import { combineReducers } from 'redux'
import stockData from './stockData'
import userData from './userData'
import stockPicker from './stockPickerData'
import loginForm from './loginForm'
import companies from './companies'
import searchBox from './searchBox'
import transactions from './transactions'

export default combineReducers({
  stockData,
  userData,
  stockPicker,
  loginForm,
  companies,
  searchBox,
  transactions
});
