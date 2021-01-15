import { put, call, takeEvery } from 'redux-saga/effects';
import { VIDEOS_REQUEST } from './types';
import { doVideosSuccess, doVideosFailure } from './actions';
import { getData } from '../../../services/api/functions';
import endpoints from '../../../services/api/endpoints';

const clientVideosRead = (id) => getData(`${ endpoints.videos }/${id}`);

export function* getVideos({ payload }) {
  try {
    const response = yield call(clientVideosRead, payload);
    yield put(doVideosSuccess(response));
  } catch (error) {
    yield put(doVideosFailure(error));
  }
}

export function* watchGetVideosAsync() {
  yield takeEvery(VIDEOS_REQUEST, getVideos);
}

export const sagas = [watchGetVideosAsync];
