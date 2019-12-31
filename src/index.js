import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';

function* watcherSaga(){
  yield takeEvery(`GET_CHANGE`, getChangeSaga);
  yield takeEvery(`RESET_ALL_QTY`, resetAllQtySaga);
  yield takeEvery(`UPDATE_CHANGE`, updateChangeSaga);
}

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

// Reset all coin/bill quantities
function* resetAllQtySaga(){
  try {
    yield axios.put(`/change/reset`);
    yield put({type: `GET_CHANGE`});
  } catch (error) {
    console.log('Error resetting all quantities:', error);
  }
}

// Update coin/bill count in database
function* updateChangeSaga(action){
  console.log('UPDATE saga with:', action.payload);
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

// Store all database data
const changeReducer = (state=[], action)=>{
  if(action.type === `SEND_CHANGE`){
    return action.payload;
  }
  return state;
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
      changeReducer
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
