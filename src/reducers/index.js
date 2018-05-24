import { combineReducers } from 'redux'
import stockData from './stockData';
import userData from './userData'

export default combineReducers({
  stockData,
  userData
});
