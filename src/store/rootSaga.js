import { fork, all } from 'redux-saga/effects';
/* INJECT_IMPORT_SAGA */

const allSagas = [
  /* INJECT_SAGA */
];

// start all sagas in parallel
export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
