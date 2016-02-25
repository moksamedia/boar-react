import { combineReducers } from 'redux';
import boarAppState from './boarReducers';
import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
  boarAppState: boarAppState,
  form: form
});

export default rootReducer;
