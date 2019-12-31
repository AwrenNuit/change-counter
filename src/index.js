import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery} from 'redux-saga/effects';
import getChangeSaga from './redux/sagas/getChangeSaga';
import resetAllQtySaga from './redux/sagas/resetAllQtySaga';
import updateChangeSaga from './redux/sagas/updateChangeSaga';
import changeReducer from './redux/reducers/changeReducer';

function* watcherSaga(){
  yield takeEvery(`GET_CHANGE`, getChangeSaga);
  yield takeEvery(`RESET_ALL_QTY`, resetAllQtySaga);
  yield takeEvery(`UPDATE_CHANGE`, updateChangeSaga);
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
      changeReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
