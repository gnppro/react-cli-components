import {
  VIDEOS_REQUEST,
  VIDEOS_SUCCESS,
  VIDEOS_FAILURE,
  VIDEOS_ERROR_CLEANUP,
  VIDEOS_RESET,
} from './types';

const initialState = {
  data: [],
  error: null,
  status: 'idle',
  statusText: '',
  statusCode: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VIDEOS_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case VIDEOS_SUCCESS:
      return {
        ...state,
        status: 'success',
        data: action.payload.data,
        statusCode: action.payload.status,
      };
    case VIDEOS_FAILURE:
      return {
        ...state,
        status: 'failure',
        error: action.payload,
        statusText: action.payload.statusText,
        statusCode: action.payload.status,
      };
    case VIDEOS_ERROR_CLEANUP:
      return {
        ...state,
        error: null,
        statusText: '',
        statusCode: null,
      };
    case VIDEOS_RESET:
      return initialState;
    default:
      return state;
  }
}
