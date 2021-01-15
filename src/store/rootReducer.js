import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './history';
/* INJECT_IMPORT_REDUCER */
import videos from './modules/videos';

export default combineReducers({
  router: connectRouter(history),
  /* INJECT_REDUCER */
	videos,
});
