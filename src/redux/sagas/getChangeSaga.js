import axios from 'axios';
import {put} from 'redux-saga/effects';

// GET all database data, send to reducer
function* getChangeSaga(){
  try{
    let getResponse = yield axios.get(`/change`);
    yield put({type:`SEND_CHANGE`, payload: getResponse.data});
  }
  catch(error){
    console.log('Error in GET change:', error);
  }
}

export default getChangeSaga;