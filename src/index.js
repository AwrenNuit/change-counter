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
import {takeEvery} from 'redux-saga/effects';

function* watcherSaga(){
  yield takeEvery(`GET_CHANGE`, getChangeSaga);
  yield takeEvery(`UPDATE_CHANGE`, updateChangeSaga);
}

function* getChangeSaga(){
  try{
    let getResponse = yield axios.get(`/change`);
    yield put({type:`SEND_CHANGE`, payload: getResponse.data});
  }
  catch(error){
    console.log('Error in GET change:', error);
  }
}

function* updateChangeSaga(action){
  try{
    let name = action.payload.name
    let qty = action.payload.qty
    yield axios.put(`/change/${name}/${qty}`);
    yield put({type: `GET_CHANGE`});
  }
  catch(error){
    console.log('Error updating change:', error);
  }
}

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
  applyMiddleware(sagaMiddleWare, logger)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
