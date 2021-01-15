import { fork, all } from 'redux-saga/effects';
/* INJECT_IMPORT_SAGA */
import { sagas as videosSagas } from './modules/videos';

const allSagas = [
  /* INJECT_SAGA */
	...videosSagas,
];

// start all sagas in parallel
export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
