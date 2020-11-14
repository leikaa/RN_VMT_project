import {combineReducers} from 'redux';
import {Profile} from './Profile';
import {Authorization} from './Authorization';
import {Main} from './Main';

const rootReducer = combineReducers({
  Profile,
  Authorization,
  Main,
});

export default rootReducer;
