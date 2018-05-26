import { combineReducers } from 'redux'
import stockData from './stockData';
import userData from './userData'
import stockPicker from './stockPickerData'

export default combineReducers({
  stockData,
  userData,
  stockPicker
});
