import axios from 'axios';
import {put} from 'redux-saga/effects';

// Reset all coin/bill quantities
function* resetAllQtySaga(){
  try {
    yield axios.put(`/change/reset`);
    yield put({type: `GET_CHANGE`});
  } catch (error) {
    console.log('Error resetting all quantities:', error);
  }
}

export default resetAllQtySaga;