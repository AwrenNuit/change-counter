import axios from 'axios';
import {put} from 'redux-saga/effects';

// Update coin/bill count in database
function* updateChangeSaga(action){
  try{
    let id = action.payload.id
    let qty = action.payload.qty
    yield axios.put(`/change/${id}/${qty}`);
    yield put({type: `GET_CHANGE`});
  }
  catch(error){
    console.log('Error updating change:', error);
  }
}

export default updateChangeSaga;