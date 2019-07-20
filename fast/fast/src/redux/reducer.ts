import { authReducer } from './auth/reducer';
import { combineReducers } from 'redux';

export default () => {
  const rootReducers = combineReducers({
    auth: authReducer,
  })
  return rootReducers
}