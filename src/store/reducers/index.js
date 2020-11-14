import {combineReducers} from 'redux';
import {Profile} from './Profile';
import {Authorization} from './Authorization';

const rootReducer = combineReducers({
  Profile,
  Authorization
});

export default rootReducer;
