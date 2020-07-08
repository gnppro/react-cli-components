import { fork, all } from 'redux-saga/effects';
// import { sagas as nameSagas } from './modules/name';

const allSagas = [
  /* ...nameSagas */
];

// start all sagas in parallel
export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
