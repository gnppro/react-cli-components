import { action } from '../common';
import {
  VIDEOS_REQUEST,
  VIDEOS_SUCCESS,
  VIDEOS_FAILURE,
  VIDEOS_ERROR_CLEANUP,
  VIDEOS_RESET,
} from './types';

export const doVideosRequest = (payload) => action(VIDEOS_REQUEST, payload);

export const doVideosSuccess = (payload) => action(VIDEOS_SUCCESS, payload);

export const doVideosFailure = (payload) => action(VIDEOS_FAILURE, payload);

export const doVideosErrorCleanup = (payload) => action(VIDEOS_ERROR_CLEANUP, payload);

export const doVideosReset = (payload) => action(VIDEOS_RESET, payload);
