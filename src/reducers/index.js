import { combineReducers } from 'redux'
import stockData from './stockData';
import userData from './userData'
import stockPicker from './stockPickerData'
import loginForm from './loginForm';
import companies from './companies';

export default combineReducers({
  stockData,
  userData,
  stockPicker,
  loginForm,
  companies,
});
