import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './history';
/* INJECT_IMPORT_REDUCER */

export default combineReducers({
  router: connectRouter(history),
  /* INJECT_REDUCER */
});
